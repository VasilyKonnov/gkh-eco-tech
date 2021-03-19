import { Input, Form, Row, Col } from 'antd';

const responsiveColStreet = { xs: 24, sm: 24, md: 24, lg: 14, xl: 14 };
const responsiveColNum = { xs: 24, sm: 24, md: 8, lg: 3, xl: 3 };

export const FormAddress = () => (
  <Row gutter={32}>
    <Col {...responsiveColStreet}>
      <Form.Item
        label="Улица"
        name="street"
        rules={[{ required: true, message: 'Не указана улица!' }]}
        className="form-item"
      >
        <Input placeholder="Название улицы" />
      </Form.Item>
    </Col>
    <Col {...responsiveColNum}>
      <Form.Item
        label="Дом"
        name="house"
        rules={[{ required: true, message: 'Не указан дом!' }]}
        className="form-item"
      >
        <Input placeholder="Номер" />
      </Form.Item>
    </Col>
    <Col {...responsiveColNum}>
      <Form.Item label="Корпус" name="building" className="form-item">
        <Input placeholder="Номер" />
      </Form.Item>
    </Col>
    <Col {...responsiveColNum}>
      <Form.Item label="Квартира" name="apartment" className="form-item">
        <Input placeholder="Номер" />
      </Form.Item>
    </Col>
  </Row>
);
