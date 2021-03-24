import { Input, Form, Row, Col } from 'antd'

const responsiveColStreet = { xs: 24, sm: 24, md: 24, lg: 14, xl: 14 }
const responsiveColNum = { xs: 24, sm: 24, md: 8, lg: 3, xl: 3 }
const fieldParams = {
  street: [{ required: true, message: 'Не указана улица!' }],
  meters_type: [
    {
      required: true,
      message: 'Пожалуйста укажите тип счетчика!',
    },
  ],
  house: [{ required: true, message: 'Не указан дом!' }],
}

export const FormAddress = () => (
  <Row gutter={32}>
    <Col {...responsiveColStreet} className="col-page-base">
      <Form.Item
        label="Улица"
        name="street"
        rules={fieldParams['street']}
        className="form-item"
      >
        <Input className="input-page-base" placeholder="Название улицы" />
      </Form.Item>
    </Col>
    <Col {...responsiveColNum} className="col-page-base">
      <Form.Item
        label="Дом"
        name="house"
        rules={fieldParams['house']}
        className="form-item"
      >
        <Input className="input-page-base" placeholder="Номер" />
      </Form.Item>
    </Col>
    <Col {...responsiveColNum} className="col-page-base">
      <Form.Item label="Корпус" name="building" className="form-item">
        <Input className="input-page-base" placeholder="Номер" />
      </Form.Item>
    </Col>
    <Col {...responsiveColNum} className="col-page-base">
      <Form.Item label="Квартира" name="apartment" className="form-item">
        <Input className="input-page-base" placeholder="Номер" />
      </Form.Item>
    </Col>
  </Row>
)
