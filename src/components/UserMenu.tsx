import { Avatar, Button, Typography, Dropdown, Menu } from 'antd';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { formatPhoneNumber } from '../helpers';

export interface IUserMenuProps {
  handlerUserMenu: (props: React.Attributes) => void;
  userPhone?: string;
  avatarUrl?: string;
  isVertical?: boolean;
}

export const UserMenu: React.FC<IUserMenuProps> = ({
  avatarUrl,
  userPhone,
  handlerUserMenu,
  isVertical,
}) => {
  const menu = (
    <Menu onClick={handlerUserMenu}>
      <Menu.Item key="profile" icon={<UserOutlined />}>
        Профиль
      </Menu.Item>
      <Menu.Item key="logout" icon={<LogoutOutlined />} danger>
        Выход
      </Menu.Item>
    </Menu>
  );

  return isVertical ? (
    <div>{menu}</div>
  ) : (
    <Dropdown overlay={menu}>
      <Button
        icon={<Avatar src={avatarUrl} style={{ marginTop: -8 }} />}
        type="text"
        size="large"
        shape="round"
      >
        <Typography.Text>{formatPhoneNumber(userPhone)}</Typography.Text>
      </Button>
    </Dropdown>
  );
};
