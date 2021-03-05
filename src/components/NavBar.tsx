import { Menu } from 'antd';

interface NavbarProps {
  pathname: string;
  changeMenu(props: object): void;
}

export const NavBar: React.FC<NavbarProps> = ({ pathname, changeMenu }) => (
  <Menu
    theme="light"
    mode="horizontal"
    defaultSelectedKeys={[pathname.slice(1)]}
    onClick={(key) => changeMenu(key)}
  >
    <Menu.Item key="payments">Начисления</Menu.Item>
    <Menu.Item key="metering">Показания</Menu.Item>
    <Menu.Item key="tickets">Заявки</Menu.Item>
    <Menu.Item key="services">Услуги</Menu.Item>
    <Menu.Item key="news">Новости</Menu.Item>
  </Menu>
);
