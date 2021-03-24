import { Layout, Row, Col, Button } from 'antd';
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
  onLogout,
  userPhone,
  avatarUrl,
  toogleMobileMenu,
  visible,
}) => (
  <Layout className="page">
    <Header className="page-header">
      <Row justify="space-between">
        <Col>
          <img src={imgLoginPage} width={80} height={50} alt="logo" />
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
                ghost
              />
              <MobileMenu
                title={
                  <UserMenu
                    onLogout={onLogout}
                    avatarUrl={avatarUrl}
                    userPhone={userPhone}
                  />
                }
                visible={visible}
                onClose={() => toogleMobileMenu(false)}
              >
                <NavMenu
                  currentMenu={currentMenu}
                  onChangeMenu={onChangeMenu}
                  isVertical
                />
              </MobileMenu>
            </>
          ) : (
            <UserMenu
              onLogout={onLogout}
              avatarUrl={avatarUrl}
              userPhone={userPhone}
            />
          )}
        </Col>
      </Row>
    </Header>
    <Content className="page-header">
      <PageContent currentPage={currentMenu} />
    </Content>
  </Layout>
);
