import { Modal, Button } from 'antd'
import { TDocButton } from './DocButtonType'
import docIcon from '../../assets/image/docIcon.svg'
import './DocButton.css'

export const DocButtonView: React.FC<TDocButton> = ({
  showModal,
  img,
  isModalVisible,
  handleCancel,
}) => {
  return (
    <>
      <Button onClick={showModal} className="btn-icon-doc">
        <img src={docIcon} alt="doc icon" />
      </Button>
      <Modal
        visible={isModalVisible}
        onCancel={handleCancel}
        width={1200}
        centered
        footer={false}
      >
        <img src={img} alt="Квитанция" style={{ maxWidth: '100%' }} />
      </Modal>
    </>
  )
}
