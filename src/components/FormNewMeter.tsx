import { Form, Input, Select, Modal } from 'antd';
import { TMeterType } from '../store/meter/meterTypes';
import { TCreateMeterProps } from '../utils/api';

const { Option } = Select;

type TFormNewMeterProps = {
  visible: boolean;
  onCreateMeter: (values: TCreateMeterProps) => void;
  onCloseModalCreateMeter: () => void;
  meterTypes: TMeterType[];
};

export const FormNewMeter: React.FC<TFormNewMeterProps> = ({
  visible,
  onCreateMeter,
  onCloseModalCreateMeter,
  meterTypes,
}) => {
  const [form] = Form.useForm();

  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
  };

  function handleOk() {
    form.validateFields().then((values) => {
      form.resetFields();
      onCreateMeter(values);
    });
  }

  return (
    <Modal
      title="Добавление счетчика"
      visible={visible}
      onOk={handleOk}
      onCancel={onCloseModalCreateMeter}
      destroyOnClose
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
            {meterTypes.map((type) => (
              <Option value={type.id} key={type.id}>
                {type.title}
              </Option>
            ))}
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};
