import { Layout } from 'antd';
import { NavBar } from './NavBar';
import { useHistory, useLocation } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

export const PageContainer: React.FC = () => {
  const { pathname } = useLocation();
  const history = useHistory();

  function onChangeMenu(props: React.ReactElement<HTMLElement>): void {
    history.push(`/${props.key}`);
  }

  return (
    <Layout style={{ height: '100vh', maxWidth: 1440, margin: '0 40px' }}>
      <Sider theme="light">Sider</Sider>
      <Layout>
        <Header style={{ background: '#fff' }}>
          <NavBar pathname={pathname} changeMenu={onChangeMenu} />
        </Header>
        <Content>Content</Content>
      </Layout>
    </Layout>
  );
};
