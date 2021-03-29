import { useState } from 'react'
import { DocButtonView } from './DocButtonView'

const fakeImg =
  'https://migrantvisa.ru/wp-content/uploads/2019/03/wsi-imageoptim-Uplata-gosposhliny.jpg'

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
