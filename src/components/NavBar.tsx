import { Menu } from 'antd';

interface NavbarProps {
  currentMenu: string;
  changeMenu(props: object): void;
}

export const NavBar: React.FC<NavbarProps> = ({ currentMenu, changeMenu }) => (
  <Menu
    theme="light"
    mode="horizontal"
    defaultSelectedKeys={[currentMenu]}
    onClick={(key) => changeMenu(key)}
  >
    <Menu.Item key="payments">Начисления</Menu.Item>
    <Menu.Item key="metering">Показания</Menu.Item>
    <Menu.Item key="tickets">Заявки</Menu.Item>
    <Menu.Item key="services">Услуги</Menu.Item>
    <Menu.Item key="news">Новости</Menu.Item>
  </Menu>
);
