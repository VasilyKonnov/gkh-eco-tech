import { Layout, Row, Col } from 'antd';
import { IPageBaseViewProps } from './PageBaseTypes';
import { NavMenu } from './../../components/NavMenu/NavMenu';
import { UserMenu } from './../../components/UserMenu/UserMenu';
const { Header, Sider, Content } = Layout;


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
          <Col>
            {!isAdmin && (
              <NavMenu currentMenu={currentMenu} onChangeMenu={onChangeMenu} />
            )}
          </Col>
          <Col>
            <UserMenu
              onLogout={onLogout}
              avatarUrl={avatarUrl}
              userPhone={userPhone}
            />
          </Col>
        </Row>
      </Header>
      <Content>Content</Content>
    </Layout>
  </Layout>
);
