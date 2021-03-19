import { Layout, Row, Col } from 'antd';
import {
  NavMenu,
  INavMenuProps,
  UserMenu,
  IUserMenuProps,
  PageContent,
} from '../../components';
import imgLoginPage from '../../assets/image/loginpage.png';

const { Header, Content } = Layout;

interface IPageBaseViewProps extends INavMenuProps, IUserMenuProps {
  isAdmin: boolean;
  currentMenu: string;
  onChangeMenu: (props: React.Attributes) => void;
}

export const PageBaseView: React.FC<IPageBaseViewProps> = ({
  isAdmin,
  currentMenu,
  onChangeMenu,
  onLogout,
  userPhone,
  avatarUrl,
}) => (
  <Layout className="page">
    <Header className="page-header">
      <Row justify="space-between">
        <Col span={4}>
          <img src={imgLoginPage} width={80} height={50} alt="logo" />
        </Col>
        <Col flex={1}>
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
    <Content className="page-header">
      <PageContent currentPage={currentMenu} />
    </Content>
  </Layout>
);
