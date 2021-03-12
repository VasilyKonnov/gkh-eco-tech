import { Menu } from 'antd';

export interface INavMenuProps {
  currentMenu: string;
  onChangeMenu(props: object): void;
}

export const NavMenu: React.FC<INavMenuProps> = ({
  currentMenu,
  onChangeMenu,
}) => (
  <Menu
    theme="light"
    mode="horizontal"
    defaultSelectedKeys={[currentMenu]}
    onClick={(key) => onChangeMenu(key)}
  >
    <Menu.Item key="payments">Начисления</Menu.Item>
    <Menu.Item key="metering">Показания</Menu.Item>
    <Menu.Item key="tickets">Заявки</Menu.Item>
    <Menu.Item key="services">Услуги</Menu.Item>
    <Menu.Item key="news">Новости</Menu.Item>
  </Menu>
);
