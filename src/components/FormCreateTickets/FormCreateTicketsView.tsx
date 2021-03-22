import { Col, Form, Input, Row, Button } from 'antd'
import { MaskedInput } from 'antd-mask-input'
import { FormAddress } from '../FormAddress'
import { TFormCreateTicketsProps } from './FormCreateTicketsTypes'

const responsiveCol = { xs: 24, sm: 24, md: 24, lg: 8, xl: 8 }
const responsiveColSubject = { xs: 24, sm: 24, md: 24, lg: 10, xl: 10 }

export const FormCreateTicketsView: React.FC<TFormCreateTicketsProps> = ({
  form,
  onSelectFile,
  onSubmit,
  fileRef,
}) => (
  <Form
    layout="vertical"
    size="large"
    form={form}
    onFinish={onSubmit}
    encType="multipart/form-data"
  >
    <FormAddress />
    <Row gutter={32}>
      <Col {...responsiveCol} className="col-page-base">
        <Form.Item
          label="Фамилия"
          name="surname"
          className="label-input-page-base"
          rules={[{ required: true, message: 'Не указана фамилия' }]}
        >
          <Input className="input-page-base" placeholder="Введите фамилию" />
        </Form.Item>
      </Col>
      <Col {...responsiveCol} className="col-page-base">
        <Form.Item
          className="label-input-page-base"
          label="Имя"
          name="name"
          rules={[{ required: true, message: 'Не указано имя' }]}
        >
          <Input className="input-page-base" placeholder="Введите имя" />
        </Form.Item>
      </Col>
      <Col {...responsiveCol} className="col-page-base">
        <Form.Item
          className="label-input-page-base"
          label="Отчество"
          name="patronymic"
          rules={[{ required: true, message: 'Не указано отчество' }]}
        >
          <Input className="input-page-base" placeholder="Введите отчество" />
        </Form.Item>
      </Col>
    </Row>
    <Row gutter={32}>
      <Col {...responsiveCol} className="col-page-base">
        <Form.Item
          className="label-input-page-base"
          label="Телефон"
          name="phone"
          rules={[{ required: true, message: 'Введите корректный номер' }]}
        >
          <MaskedInput
            maxLength={11}
            minLength={11}
            mask="1 111 111 1111"
            placeholder="Введите телефон"
            className="input-page-base"
          />
        </Form.Item>
      </Col>
      <Col {...responsiveCol} className="col-page-base">
        <Form.Item
          className="label-input-page-base"
          label="Электронная почта"
          name="email"
          rules={[
            {
              type: 'email',
              required: true,
              message: 'Введите корректный Email',
            },
          ]}
        >
          <Input
            className="input-page-base"
            placeholder="Введите электронную почту"
          />
        </Form.Item>
      </Col>
    </Row>
    <Col {...responsiveColSubject} className="col-page-base">
      <Form.Item
        className="label-input-page-base"
        label="Обращение"
        name="subject"
        rules={[
          {
            required: true,
            message: 'Не указана тема обращения',
          },
        ]}
      >
        <Input className="input-page-base" placeholder="Тема" />
      </Form.Item>
    </Col>
    <Form.Item name="text">
      <Input.TextArea
        className="textarea-appel-filds"
        placeholder="Текст обращения"
      />
    </Form.Item>
    <Form.Item name="attachment">
      <input name="attachment" type="file" ref={fileRef} />
    </Form.Item>
    <Form.Item wrapperCol={{ span: 24 }}>
      <Button type="primary" htmlType="submit" className="button-primary">
        Отправить
      </Button>
    </Form.Item>
  </Form>
)
