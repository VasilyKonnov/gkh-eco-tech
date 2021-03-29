import { useState } from 'react'
import { DocButtonView } from './DocButtonView'

const fakeImg =
  'https://u.9111s.ru/uploads/202102/20/d6fd6657e02633321069bdbd829fe6c7.jpg'

export const DocButton = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }
  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return (
    <DocButtonView
      img={fakeImg}
      showModal={showModal}
      handleCancel={handleCancel}
      isModalVisible={isModalVisible}
    />
  )
}
