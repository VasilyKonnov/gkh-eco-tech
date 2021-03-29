import { useCallback, useEffect, useState } from 'react';
import { Form, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { userAction, userSelector } from '../../store/user';
import { TValuesForm } from './FormProfileTypes';
import { FormProfileView } from './FormProfileView';
import { RcFile } from 'antd/lib/upload';
import { FormProfileControls } from '../FormProfileControls';

const addressKeys = ['street', 'house', 'building', 'apartment'];

type TFile = {
  file: RcFile;
  fileList: RcFile[];
};

export const FormProfile: React.FC = () => {
  const [form] = Form.useForm();
  const { userId, profile } = useSelector(userSelector);
  const [btnTitle, setBtnTitle] = useState('Сохранить');
  const [canDelete, setCanDelete] = useState(false);
  const [files, setFiles] = useState<RcFile[]>([]);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const fillForm = useCallback(() => {
    form.setFieldsValue({ ...profile, ...profile.address });
    if (profile.attachment) {
      const fileName = profile.attachment.split('/').pop();
      const file = {
        uid: '-1',
        name: fileName || '',
        status: 'done',
        // url: profile.attachment,
      };
      setFiles([file as any]);
    }
    if (profile.name) {
      setBtnTitle('Изменить данные');
      setCanDelete(true);
    }
  }, [form, profile]);

  // fill form on open
  useEffect(() => {
    fillForm();
  }, [fillForm]);

  function makeFormData(values: any) {
    const formData = new FormData();

    values.forEach((field: any) => {
      const [key, val] = field;

      if (addressKeys.includes(key)) {
        formData.append(`address.${key}`, val as string);
      }
      if (key === 'attachment') {
        const { fileList } = val as TFile;
        fileList.length
          ? formData.append(key, fileList[0])
          : formData.append(key, '');
      } else {
        formData.append(key, val as string);
      }
    });
    return formData;
  }

  function handlerChangeProfile() {
    const values = form.getFieldsValue();

    const fields = getChangedFields(values);
    if (!fields.length) {
      message.info('Данные профиля не были изменены!');
      return;
    }

    setLoading(true);
    const formData = makeFormData(fields);
    dispatch(
      userAction.changeProfile(userId, formData, () => setLoading(false))
    );
  }

  function getChangedFields(values: TValuesForm) {
    return Object.entries(values).filter((field) => {
      const [key, val] = field;
      if (addressKeys.includes(key) && profile.address.hasOwnProperty(key)) {
        // @ts-ignore
        return val?.toString().trim() !== profile.address[key];
      } else {
        // @ts-ignore
        return val !== profile[key];
      }
    });
  }

  function handlerRemoveProfile() {
    dispatch(userAction.removeProfile(userId));
  }

  const onRemoveFile = () => {
    setFiles([]);
  };

  const beforeUpload = (file: RcFile) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('Вы можете загрузить только JPG/PNG файл!');
    }
    const isLt2M = file.size / 1024 / 1024 < 10;
    if (!isLt2M) {
      message.error('Изображение не должно быть более 10MB!');
    }
    isJpgOrPng && isLt2M && setFiles([file]);

    return false;
  };

  return (
    <>
      <FormProfileView
        form={form}
        onRemoveFile={onRemoveFile}
        beforeUploadFile={beforeUpload}
        fileList={files}
      />
      <FormProfileControls
        btnTitle={btnTitle}
        canDelete={canDelete}
        loading={loading}
        handlerChangeProfile={handlerChangeProfile}
        handlerRemoveProfile={handlerRemoveProfile}
      />
    </>
  );
};
