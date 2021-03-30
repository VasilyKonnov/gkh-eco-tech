import { memo } from 'react';
import { Form, Row, Col, Input, FormInstance, Button, Upload } from 'antd';
import { FormAddress } from '../FormAddress';
import { FormPersonalInfo } from '../FormPersonalInfo';
import { UploadOutlined } from '@ant-design/icons';
import { RcFile } from 'antd/lib/upload';

type TFormProfileViewProps = {
  form: FormInstance;
  onRemoveFile?: () => void;
  beforeUploadFile?: (file: RcFile) => boolean;
  fileList?: RcFile[];
};

export const FormProfileView: React.FC<TFormProfileViewProps> = memo(
  ({ form, onRemoveFile, beforeUploadFile, fileList }) => {
    return (
      <Form layout="vertical" size="large" form={form}>
        <FormPersonalInfo />
        <FormAddress />
        <Row gutter={32}>
          <Col span={8}>
            <Form.Item
              label="№ лицевого счета"
              name="personal_account"
              className="form-item"
              rules={[
                {
                  required: true,
                  message: 'Введите корректный № лицевого счета',
                  max: 9,
                },
              ]}
            >
              <Input
                type="number"
                placeholder="Введите номер счета"
                maxLength={9}
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Электронная почта"
              name="email"
              className="form-item"
              rules={[
                {
                  required: true,
                  message: 'Введите электронную почту',
                  type: 'email',
                },
              ]}
            >
              <Input type="email" placeholder="Адрес почты" />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item name="attachment" wrapperCol={{ span: 12 }}>
          <Upload
            name="file"
            listType="picture"
            maxCount={1}
            onRemove={onRemoveFile}
            beforeUpload={beforeUploadFile}
            fileList={fileList}
            accept="image/png, image/jpeg"
          >
            <Button icon={<UploadOutlined />} type="text">
              Прикрепить файл
            </Button>
          </Upload>
        </Form.Item>
      </Form>
    );
  }
);
