import { Menu } from 'antd';
import { INavMenuProps } from './NavMenuTypes';
import './NavMenu.css';

export const NavMenu: React.FC<INavMenuProps> = ({
  currentMenu,
  onChangeMenu,
}) => (
  <Menu
    theme="light"
    mode="horizontal"
    defaultSelectedKeys={[currentMenu]}
    onClick={(key) => onChangeMenu(key)}
    className="page-navmenu"
  >
    <Menu.Item key="payments">Начисления</Menu.Item>
    <Menu.Item key="metering">Показания</Menu.Item>
    <Menu.Item key="tickets">Заявки</Menu.Item>
    <Menu.Item key="services">Услуги</Menu.Item>
    <Menu.Item key="news">Новости</Menu.Item>
  </Menu>
);
