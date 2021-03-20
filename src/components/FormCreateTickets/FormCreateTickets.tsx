import { Col, Form, Input, Row, Button } from 'antd'
import { UploadFile } from './../index'
import { MaskedInput } from 'antd-mask-input'
import { getNormalizedPhoneValue } from '../../helpers/getNormalizedPhoneValue'
import './FormCreateTickets.css'
import { ticketsAction } from '../../store/tickets'
import { FormCreateTicketsTypes } from './FormCreateTicketsTypes'
import { useDispatch } from 'react-redux'

export const FormCreateTickets: React.FC = () => {
  const [form] = Form.useForm()
  const dispatch = useDispatch()

  console.log('values - ', values)

  function onCreateFields() {
    form.validateFields().then((values) => {
      let sendTicketData = {
        subject: values.subject.subject,
        text: values.text.text,
        surname: values.surname.surname,
        name: values.name.name,
        patronymic: values.patronymic.patronymic,
        phone: getNormalizedPhoneValue(values.phone.phone),
        email: values.email.email,
        // attachment: values.attachment.attachment,
        address: {
          street: values.street.street,
          house: values.house.house,
          building: values.building.building,
          apartment: values.apartment.apartment,
        },
      }
      console.log('sendTicketData - ', sendTicketData)

      dispatch(ticketsAction.create(sendTicketData))
    })
  }

  return (
    <Form name="nest-messages" form={form}>
      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        className="tickets-form-row tickets-form-row-top "
      >
        <Col xs={24} sm={20} md={9}>
          <div className="label-input-flex-wrap">
            <Form.Item
              className="label-input-page-base"
              label="Улица"
              name={['street', 'street']}
              rules={[
                {
                  required: true,
                  message: 'Это поле обязательно для заполнения!',
                },
              ]}
            >
              <Input className="input-page-base" placeholder="Название улицы" />
            </Form.Item>
          </div>
        </Col>
        <Col xs={24} sm={20} md={5}>
          <div className="label-input-flex-wrap">
            <Form.Item
              className="label-input-page-base"
              label="Дом"
              name={['house', 'house']}
              rules={[
                {
                  required: true,
                  message: 'Это поле обязательно для заполнения!',
                },
              ]}
            >
              <Input className="input-page-base" placeholder="Номер" />
            </Form.Item>
          </div>
        </Col>
        <Col xs={24} sm={20} md={5}>
          <div className="label-input-flex-wrap">
            <Form.Item
              className="label-input-page-base"
              label="Корпус"
              name={['building', 'building']}
            >
              <Input className="input-page-base" placeholder="Номер" />
            </Form.Item>
          </div>
        </Col>
        <Col xs={24} sm={20} md={5}>
          <div className="label-input-flex-wrap">
            <Form.Item
              className="label-input-page-base"
              label="Квартира"
              name={['apartment', 'apartment']}
              rules={[
                {
                  required: true,
                  message: 'Это поле обязательно для заполнения!',
                },
              ]}
            >
              <Input className="input-page-base" placeholder="Номер" />
            </Form.Item>
          </div>
        </Col>
      </Row>
      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        className="tickets-form-row"
      >
        <Col xs={24} sm={20} md={8}>
          <div className="label-input-flex-wrap">
            <Form.Item
              className="label-input-page-base"
              label="Фамилия"
              name={['surname', 'surname']}
              rules={[
                {
                  required: true,
                  message: 'Это поле обязательно для заполнения!',
                },
              ]}
            >
              <Input
                className="input-page-base"
                placeholder="Введите фамилию"
              />
            </Form.Item>
          </div>
        </Col>
        <Col xs={24} sm={20} md={8}>
          <div className="label-input-flex-wrap">
            <Form.Item
              className="label-input-page-base"
              label="Имя"
              name={['name', 'name']}
              rules={[
                {
                  required: true,
                  message: 'Это поле обязательно для заполнения!',
                },
              ]}
            >
              <Input className="input-page-base" placeholder="Введите имя" />
            </Form.Item>
          </div>
        </Col>
        <Col xs={24} sm={20} md={8}>
          <div className="label-input-flex-wrap">
            <Form.Item
              className="label-input-page-base"
              label="Отчество"
              name={['patronymic', 'patronymic']}
              rules={[
                {
                  required: true,
                  message: 'Это поле обязательно для заполнения!',
                },
              ]}
            >
              <Input
                className="input-page-base"
                placeholder="Введите отчество"
              />
            </Form.Item>
          </div>
        </Col>
        <Col xs={24} sm={20} md={8}>
          <div className="label-input-flex-wrap">
            <Form.Item
              className="label-input-page-base"
              label="Телефон"
              name={['phone', 'phone']}
              rules={[
                {
                  required: true,
                  message: 'Это поле обязательно для заполнения!',
                },
              ]}
            >
              <MaskedInput
                mask="+1 111 111 11 11"
                placeholder="Введите телефон"
                className="input-page-base"
              />
            </Form.Item>
          </div>
        </Col>
        <Col xs={24} sm={20} md={8}>
          <div className="label-input-flex-wrap">
            <Form.Item
              className="label-input-page-base"
              label="Электронная почта"
              name={['email', 'email']}
              rules={[
                {
                  type: 'email',
                  required: true,
                  message: 'Введите корректный Email!',
                },
              ]}
            >
              <Input
                className="input-page-base"
                placeholder="Введите электронную почту"
              />
            </Form.Item>
          </div>
        </Col>
      </Row>
      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        className="tickets-form-row"
      >
        <Col xs={24} sm={20} md={9}>
          <div className="label-input-flex-wrap">
            <Form.Item
              className="label-input-page-base"
              label="Обращение"
              name={['subject', 'subject']}
              rules={[
                {
                  required: true,
                  message: 'Это поле обязательно для заполнения!',
                },
              ]}
            >
              <Input className="input-page-base" placeholder="Тема" />
            </Form.Item>
          </div>
        </Col>
        <Col xs={24}>
          <Form.Item name={['text', 'text']}>
            <Input.TextArea
              className="textarea-appel-filds"
              placeholder="Текст обращения"
            />
          </Form.Item>
        </Col>
      </Row>
      <UploadFile />
      <Button
        className="button-primary"
        htmlType="submit"
        onClick={onCreateFields}
      >
        Отправить
      </Button>
    </Form>
  )
}
function dispatch(
  arg0: (dispatch: import('redux').Dispatch<import('redux').AnyAction>) => void,
) {
  throw new Error('Function not implemented.')
}
function values(arg0: string, values: any) {
  throw new Error('Function not implemented.')
}
