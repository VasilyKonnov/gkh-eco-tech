import { memo } from 'react';
import {
  Input,
  Form,
  Button,
  Row,
  Col,
  Typography,
  Badge,
  ConfigProvider,
  Empty,
} from 'antd';
import { TabMeteringViewProps } from './TabMeteringTypes';
import { FormAddress } from '../FormAddress';
import { SelectMeter } from '../SelectMeter/SelectMeter';

const customizeEmptyMeters = () => (
  <div style={{ textAlign: 'center' }}>
    <Empty description={false} image={Empty.PRESENTED_IMAGE_SIMPLE} />
    <p>Нет добавленных счетчиков</p>
  </div>
);

const responsiveColNum = { xs: 24, sm: 24, md: 24, lg: 7, xl: 7 };

const TabMeteringView: React.FC<TabMeteringViewProps> = ({
  onSubmit,
  onAddMeter,
  onShowAllMeters,
  form,
  meterListComponent,
  activeMeter,
  countMeters,
  prevValue,
  onChangeMeter,
}) => (
  <ConfigProvider renderEmpty={customizeEmptyMeters}>
    <Form layout="vertical" size="large" onFinish={onSubmit} form={form}>
      <FormAddress />
      <Form.Item>
        <Row justify="space-between" align="middle">
          <Col>
            <Typography.Text className="title">Счетчики</Typography.Text>
          </Col>
          <Col>
            {countMeters > 4 && (
              <Button
                type="link"
                onClick={onShowAllMeters}
                style={{ fontSize: 14 }}
              >
                Показать все
                <Badge count={countMeters} className="badge-count-meter" />
              </Button>
            )}
          </Col>
        </Row>
        {meterListComponent}
        <Button
          type="primary"
          ghost
          onClick={onAddMeter}
          className="btn-add-meter"
        >
          Добавить счетчик
        </Button>
      </Form.Item>
      <Row gutter={32}>
        <Col {...responsiveColNum}>
          <Form.Item
            label="Текущие показания"
            name="meter"
            rules={[{ required: true, message: 'Не выбран счетчик!' }]}
            className="form-item"
          >
            <SelectMeter
              onChangeMeter={onChangeMeter}
              activeMeter={activeMeter}
            />
          </Form.Item>
        </Col>
        <Col {...responsiveColNum}>
          <Form.Item label="Предыдущие показания" className="form-item">
            <Input bordered={false} readOnly value={prevValue} />
          </Form.Item>
        </Col>
        <Col {...responsiveColNum}>
          <Form.Item
            label="Текущие показания"
            name="value"
            rules={[{ required: true, message: 'Не указано значение!' }]}
            className="form-item"
          >
            <Input placeholder="Введите показания" />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item wrapperCol={{ span: 24 }}>
        <Button type="primary" htmlType="submit" className="btn-submit">
          Отправить
        </Button>
      </Form.Item>
    </Form>
  </ConfigProvider>
);

export default memo(TabMeteringView);
