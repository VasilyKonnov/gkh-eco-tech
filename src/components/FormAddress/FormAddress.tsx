import { Input, Form, Row, Col } from 'antd';

const responsiveColStreet = { xs: 24, sm: 24, md: 24, lg: 12, xl: 12 };
const responsiveColNum = { xs: 24, sm: 24, md: 8, lg: 4, xl: 4 };
const fieldParams = {
  street: [{ required: true, message: 'Не указана улица!' }],
  meters_type: [
    {
      required: true,
      message: 'Пожалуйста укажите тип счетчика!',
    },
  ],
  house: [{ required: true, message: 'Не указан дом!' }],
};

type TFormAddressProps = {
  readOnly?: boolean;
};

export const FormAddress: React.FC<TFormAddressProps> = ({ readOnly }) => {
  const inputProps = readOnly
    ? { readOnly, bordered: false }
    : { placeholder: 'Номер' };

  return (
    <Row gutter={32}>
      <Col {...responsiveColStreet}>
        <Form.Item
          label="Улица"
          name="street"
          rules={fieldParams['street']}
          className="form-item"
        >
          <Input placeholder="Название улицы" {...inputProps} />
        </Form.Item>
      </Col>
      <Col {...responsiveColNum}>
        <Form.Item
          label="Дом"
          name="house"
          rules={fieldParams['house']}
          className="form-item"
        >
          <Input {...inputProps} />
        </Form.Item>
      </Col>
      <Col {...responsiveColNum}>
        <Form.Item label="Корпус" name="building" className="form-item">
          <Input {...inputProps} />
        </Form.Item>
      </Col>
      <Col {...responsiveColNum}>
        <Form.Item label="Квартира" name="apartment" className="form-item">
          <Input {...inputProps} />
        </Form.Item>
      </Col>
    </Row>
  );
};
