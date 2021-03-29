import { Layout, Row, Col, Button, Avatar, Menu } from 'antd';
import {
  NavMenu,
  INavMenuProps,
  UserMenu,
  IUserMenuProps,
  PageContent,
  MobileMenu,
} from '../../components';
import imgLoginPage from '../../assets/image/loginpage.png';
import { MenuOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Header, Content } = Layout;

interface IPageBaseViewProps extends INavMenuProps, IUserMenuProps {
  hideUserMenu: boolean;
  hideNavMenu: boolean;
  currentMenu: string;
  onChangeMenu: (props: React.Attributes) => void;
  toogleMobileMenu: (bool: boolean) => void;
  visible: boolean;
}

export const PageBaseView: React.FC<IPageBaseViewProps> = ({
  hideUserMenu,
  hideNavMenu,
  currentMenu,
  onChangeMenu,
  userPhone,
  avatarUrl,
  toogleMobileMenu,
  visible,
  handlerUserMenu,
}) => (
  <Layout className="page">
    <Header className="page-header">
      <Row justify="space-between">
        <Col>
          <Link to="/">
            <img src={imgLoginPage} width={80} height={50} alt="logo" />
          </Link>
        </Col>
        <Col>
          {hideNavMenu && (
            <NavMenu currentMenu={currentMenu} onChangeMenu={onChangeMenu} />
          )}
        </Col>
        <Col>
          {hideUserMenu ? (
            <>
              <Button
                type="text"
                onClick={() => toogleMobileMenu(true)}
                icon={<MenuOutlined />}
                size="large"
                shape="circle"
              />
              <MobileMenu
                title={
                  <>
                    <Avatar src={avatarUrl} style={{ marginTop: -8 }} />
                    {userPhone}
                  </>
                }
                visible={visible}
                onClose={() => toogleMobileMenu(false)}
              >
                <Menu>
                  <Menu.ItemGroup key="group-menu" title="Меню">
                    <NavMenu
                      currentMenu={currentMenu}
                      onChangeMenu={onChangeMenu}
                      isVertical
                    />
                  </Menu.ItemGroup>
                  <Menu.ItemGroup key="group-profile" title="Учетная запись">
                    <UserMenu
                      handlerUserMenu={handlerUserMenu}
                      avatarUrl={avatarUrl}
                      userPhone={userPhone}
                      isVertical
                    />
                  </Menu.ItemGroup>
                </Menu>
              </MobileMenu>
            </>
          ) : (
            <UserMenu
              handlerUserMenu={handlerUserMenu}
              avatarUrl={avatarUrl}
              userPhone={userPhone}
            />
          )}
        </Col>
      </Row>
    </Header>
    <Content className="page-content">
      <PageContent currentPage={currentMenu} />
    </Content>
  </Layout>
);
