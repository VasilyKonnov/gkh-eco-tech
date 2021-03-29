import { Col, Form, Input, Row, Button } from 'antd'
import { MaskedInput } from 'antd-mask-input'
import { FormAddress } from '../FormAddress'
import { TTabTicketsProps } from './TabTicketsTypes'

const responsiveCol = { xs: 24, sm: 24, md: 24, lg: 8, xl: 8 }
const responsiveColSubject = { xs: 24, sm: 24, md: 24, lg: 10, xl: 10 }
const surnameRules = [{ required: true, message: 'Введите фамилию' }]
const nameRules = [{ required: true, message: 'Введите имя' }]
const patronymicRules = [{ message: 'Введите отчество' }]
const phoneRules = [{ required: true, message: 'Введите корректный номер' }]
const emailRules = [{ message: 'Введите электронную почту', type: 'email' }]
const subjectRules = [{ required: true, message: 'Введите тему сообщения' }]
const textRules = [{ required: true, message: 'Введите сообщение' }]

export const TabTicketsView: React.FC<TTabTicketsProps> = ({
  form,
  onSubmit,
  fileRef,
  isSending,
}) => (
  <Form
    layout="vertical"
    size="large"
    form={form}
    onFinish={onSubmit}
    encType="multipart/form-data"
  >
    <FormAddress readOnly={false} />
    <Row gutter={32}>
      <Col {...responsiveCol} className="col-page-base">
        <Form.Item
          label="Фамилия"
          name="surname"
          className="label-input-page-base"
          rules={surnameRules}
        >
          <Input className="input-page-base" placeholder="Введите фамилию" />
        </Form.Item>
      </Col>
      <Col {...responsiveCol} className="col-page-base">
        <Form.Item
          className="label-input-page-base"
          label="Имя"
          name="name"
          rules={nameRules}
        >
          <Input className="input-page-base" placeholder="Введите имя" />
        </Form.Item>
      </Col>
      <Col {...responsiveCol} className="col-page-base">
        <Form.Item
          className="label-input-page-base"
          label="Отчество"
          name="patronymic"
          rules={patronymicRules}
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
          rules={phoneRules}
        >
          <MaskedInput
            maxLength={11}
            minLength={11}
            mask="+1 111 111 11 11"
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
          // @ts-ignore
          rules={emailRules}
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
        rules={subjectRules}
      >
        <Input className="input-page-base" placeholder="Тема" />
      </Form.Item>
    </Col>
    <Form.Item name="text" rules={textRules}>
      <Input.TextArea
        className="textarea-appel-filds"
        placeholder="Текст обращения"
      />
    </Form.Item>
    <Form.Item name="attachment">
      <input name="attachment" type="file" ref={fileRef} />
    </Form.Item>
    <Form.Item wrapperCol={{ span: 24 }}>
      <Button
        type="primary"
        htmlType="submit"
        className="button-primary"
        loading={isSending}
      >
        Отправить
      </Button>
    </Form.Item>
  </Form>
)
