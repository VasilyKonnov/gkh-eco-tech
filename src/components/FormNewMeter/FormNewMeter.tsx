import { Form, Input, Select, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { meterAction, meterSelector, setVisibleModal } from '../../store/meter';

const { Option } = Select;

export const FormNewMeter: React.FC = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { types, visibleModalAddMeter } = useSelector(meterSelector);

  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
  };

  function onCreateMeter() {
    form.validateFields().then((values) => {
      dispatch(meterAction.create(values, form.resetFields));
    });
  }
  function onClose() {
    dispatch(setVisibleModal({ visible: false }));
  }

  return (
    <>
      <Modal
        title="Добавление счетчика"
        visible={visibleModalAddMeter}
        onOk={onCreateMeter}
        onCancel={onClose}
        forceRender
        cancelText="Отмена"
      >
        <Form {...layout} form={form}>
          <Form.Item
            name="title"
            label="Счетчик"
            rules={[
              {
                required: true,
                message: 'Пожалуйста укажите название счетчика!',
              },
            ]}
          >
            <Input placeholder="Введите название счетчика" />
          </Form.Item>
          <Form.Item
            name="meters_type"
            label="Тип счетчика"
            rules={[
              {
                required: true,
                message: 'Пожалуйста укажите тип счетчика!',
              },
            ]}
          >
            <Select placeholder="Выберите тип" allowClear>
              {types.map((type) => (
                <Option value={type.id} key={type.id}>
                  {type.title}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
