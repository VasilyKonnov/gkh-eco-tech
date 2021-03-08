import { Avatar, Button, Space, Typography } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import { formatPhoneNumber } from '../helpers';

export interface IUserMenuProps {
  onLogout(): void;
  userPhone?: string;
  avatarUrl?: string;
}

export const UserMenu: React.FC<IUserMenuProps> = ({
  avatarUrl,
  userPhone,
  onLogout,
}) => (
  <Space>
    <Avatar src={avatarUrl} style={{ marginTop: -8 }} />
    <Typography.Text>{formatPhoneNumber(userPhone)}</Typography.Text>
    <Button
      type="text"
      icon={<LogoutOutlined />}
      shape="circle"
      style={{ marginLeft: 24 }}
      onClick={onLogout}
    />
  </Space>
);
