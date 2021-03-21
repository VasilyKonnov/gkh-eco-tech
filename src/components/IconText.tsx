import { Space } from 'antd';
import { getMeterIcon } from '../helpers';

type TIconTextProps = {
  meters_type: number;
  text: string;
};

export const IconText: React.FC<TIconTextProps> = ({ meters_type, text }) => (
  <Space size={4} align="center">
    <div style={{ marginTop: 6 }}>{getMeterIcon(meters_type, 18)}</div>
    <div>{text}</div>
  </Space>
);
