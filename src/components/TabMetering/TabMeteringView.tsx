import { memo } from 'react';
import { Input, Form, Button, Row, Col, Typography, Badge } from 'antd';
import { TabMeteringViewProps } from './TabMeteringTypes';
import { FormAddress } from '../FormAddress';
import { SelectMeter } from '../SelectMeter/SelectMeter';
import { EmptyBox } from '../EmptyBox';

const responsiveColNum = { xs: 24, sm: 24, md: 24, lg: 7, xl: 7 };
const fieldParams = {
  meter: [{ required: true, message: 'Не выбран счетчик!' }],
  value: [{ required: true, message: 'Не указано значение!' }],
};

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
  onClearMeter,
  lockFormAddress,
}) => (
  <EmptyBox text="Нет добавленных счетчиков">
    <Form layout="vertical" size="large" onFinish={onSubmit} form={form}>
      <FormAddress readOnly={lockFormAddress} />
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
            label="Счетчик"
            name="meter"
            rules={fieldParams['meter']}
            className="form-item"
          >
            <SelectMeter
              onChangeMeter={onChangeMeter}
              activeMeter={activeMeter}
              onClearMeter={onClearMeter}
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
            rules={fieldParams['value']}
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
  </EmptyBox>
);

export default memo(TabMeteringView);
