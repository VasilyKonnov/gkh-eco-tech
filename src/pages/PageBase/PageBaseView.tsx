import { Layout, Row, Col } from 'antd';
import { NavMenu, INavMenuProps, UserMenu, IUserMenuProps } from '../../components';

const { Header, Sider, Content } = Layout;

interface IPageBaseViewProps extends INavMenuProps, IUserMenuProps {
  isAdmin: boolean;
}

export const PageBaseView: React.FC<IPageBaseViewProps> = ({
  isAdmin,
  currentMenu,
  onChangeMenu,
  onLogout,
  userPhone,
  avatarUrl,
}) => (
  <Layout className="page-container">
    {!isAdmin && <Sider theme="light">Sider</Sider>}
    <Layout>
      <Header className="header">
        <Row justify="space-between">
          <Col>{!isAdmin && <NavMenu currentMenu={currentMenu} onChangeMenu={onChangeMenu} />}</Col>
          <Col>
            <UserMenu onLogout={onLogout} avatarUrl={avatarUrl} userPhone={userPhone} />
          </Col>
        </Row>
      </Header>
      <Content>Content</Content>
    </Layout>
  </Layout>
);
