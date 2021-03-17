import { Input, Form, Button, Row, Col, Select, FormInstance } from 'antd';
import { TMeterItem } from '../../store/meter';
import { MeteringList } from '../MeteringList';

type FormMeteringTabViewProps = {
  onSubmit: (value: object) => void;
  // TODO: возможно стоит удалить метод т.к. список типов счетчика
  onTypeMeterChange?: (value: string) => void;
  onAddMeter: () => void;
  meterList: TMeterItem[];
  form: FormInstance;
};

const { Option } = Select;

export const FormMeteringTabView: React.FC<FormMeteringTabViewProps> = ({
  onSubmit,
  onAddMeter,
  meterList,
  form,
}) => (
  <Form layout="vertical" size="large" onFinish={onSubmit} form={form}>
    <Row gutter={[16, 16]}>
      <Col span={14}>
        <Form.Item
          label="Улица"
          name="street"
          rules={[{ required: true, message: 'Не указана улица!' }]}
        >
          <Input placeholder="Название улицы" />
        </Form.Item>
      </Col>
      <Col span={3}>
        <Form.Item
          label="Дом"
          name="home"
          rules={[{ required: true, message: 'Не указан дом!' }]}
        >
          <Input placeholder="Номер" />
        </Form.Item>
      </Col>
      <Col span={3}>
        <Form.Item label="Корпус" name="build">
          <Input placeholder="Номер" />
        </Form.Item>
      </Col>
      <Col span={3}>
        <Form.Item
          label="Квартира"
          name="flat"
          rules={[{ required: true, message: 'Не указана квартира!' }]}
        >
          <Input placeholder="Номер" />
        </Form.Item>
      </Col>
    </Row>
    <Form.Item label="Счетчики">
      <MeteringList data={meterList} />
    </Form.Item>
    <Button type="primary" ghost onClick={onAddMeter}>
      Добавить счетчик
    </Button>
    <Row gutter={[16, 16]}>
      <Col span={10}>
        <Form.Item label="Тип счетчика" name="meter">
          <Select style={{ width: '100%' }} placeholder="Выберите тип">
            {meterList.map((meter) => (
              <Option value={meter.id} key={meter.id}>
                {meter.title}
              </Option>
            ))}
          </Select>
        </Form.Item>
      </Col>
      <Col span={7}>
        <Form.Item label="Предыдущие показания" name="prev-value">
          <Input placeholder="Введите показания" />
        </Form.Item>
      </Col>
      <Col span={7}>
        <Form.Item label="Текущие показания" name="value">
          <Input placeholder="Введите показания" />
        </Form.Item>
      </Col>
    </Row>
    <Form.Item wrapperCol={{ span: 24 }}>
      <Button
        type="primary"
        htmlType="submit"
        style={{ background: '#2B6DB0' }}
      >
        Отправить
      </Button>
    </Form.Item>
  </Form>
);
