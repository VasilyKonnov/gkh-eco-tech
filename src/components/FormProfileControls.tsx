import { Button, Row, Col, Popconfirm } from 'antd';

type TFormProfileControlsProps = {
  btnTitle: string;
  canDelete: boolean;
  loading: boolean;
  handlerChangeProfile: () => void;
  handlerRemoveProfile: () => void;
};

export const FormProfileControls: React.FC<TFormProfileControlsProps> = ({
  btnTitle,
  canDelete,
  loading,
  handlerChangeProfile,
  handlerRemoveProfile,
}) => (
  <Row gutter={32}>
    <Col>
      <Button
        type="primary"
        className="btn-submit"
        loading={loading}
        onClick={handlerChangeProfile}
      >
        {btnTitle}
      </Button>
    </Col>
    <Col>
      {canDelete && (
        <Popconfirm
          title="Удалить профиль и его данные?"
          onConfirm={handlerRemoveProfile}
          okText="Да"
          cancelText="Отмена"
        >
          <Button className="btn-submit" danger>
            Удалить профиль
          </Button>
        </Popconfirm>
      )}
    </Col>
  </Row>
);
