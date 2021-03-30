import { Row, Col, Form, Input } from 'antd';

const fieldParams = {
  surname: [
    { required: true, message: 'Не указана фамилия!', whitespace: true },
  ],
  name: [{ required: true, message: 'Не указано имя!', whitespace: true }],
  patronymic: [{ message: 'Не указано отчество!' }],
};

const responsiveCol = { xs: 24, sm: 24, md: 8, lg: 8, xl: 8 };

export const FormPersonalInfo = () => {
  return (
    <Row gutter={32}>
      <Col {...responsiveCol}>
        <Form.Item
          label="Фамилия"
          name="surname"
          rules={fieldParams['surname']}
          className="form-item"
        >
          <Input placeholder="Введите фамилию" />
        </Form.Item>
      </Col>
      <Col {...responsiveCol}>
        <Form.Item
          label="Имя"
          name="name"
          rules={fieldParams['name']}
          className="form-item"
        >
          <Input placeholder="Введите имя" />
        </Form.Item>
      </Col>
      <Col {...responsiveCol}>
        <Form.Item
          label="Отчество"
          name="patronymic"
          rules={fieldParams['patronymic']}
          className="form-item"
        >
          <Input placeholder="Введите отчество" />
        </Form.Item>
      </Col>
    </Row>
  );
};
