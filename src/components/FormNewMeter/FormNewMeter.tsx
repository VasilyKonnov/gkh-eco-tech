import { Form, Input, Select, Modal } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { meterAction, meterSelector, setVisibleModal } from '../../store/meter'
import { IconText } from '../IconText'

const { Option } = Select

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
}

const fieldParams = {
  title: [
    {
      required: true,
      message: 'Пожалуйста укажите название счетчика!',
    },
  ],
  meters_type: [
    {
      required: true,
      message: 'Пожалуйста укажите тип счетчика!',
    },
  ],
}

export const FormNewMeter: React.FC = () => {
  const [form] = Form.useForm()
  const dispatch = useDispatch()
  const { types, visibleModalAddMeter } = useSelector(meterSelector)

  function onCreateMeter() {
    form.validateFields().then((values) => {
      dispatch(meterAction.create(values, form.resetFields))
    })
  }

  function onClose() {
    dispatch(setVisibleModal({ visible: false }))
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
          <Form.Item name="title" label="Счетчик" rules={fieldParams['title']}>
            <Input placeholder="Введите название счетчика" />
          </Form.Item>
          <Form.Item
            name="meters_type"
            label="Тип счетчика"
            rules={fieldParams['meters_type']}
          >
            <Select placeholder="Выберите тип" allowClear>
              {types.map((type) => (
                <Option value={type.id} key={type.id}>
                  <IconText meters_type={type.id} text={type.title} />
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}
