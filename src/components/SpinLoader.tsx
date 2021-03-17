import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = (
  <LoadingOutlined style={{ fontSize: 48, color: '#004f9e' }} spin />
);

export const SpinLoader = () => (
  <Spin indicator={antIcon} style={{ margin: 'auto' }} />
);
