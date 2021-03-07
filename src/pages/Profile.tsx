import { Layout } from 'antd';
import { NavBar } from '../components/NavBar';
import { useHistory, useLocation } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

const Profile: React.FC = () => {
  const { pathname } = useLocation();
  const history = useHistory();
  const layoutStyle = { height: '100vh', maxWidth: 1440, margin: '0 40px' }


  function onChangeMenu(props: React.ReactElement<HTMLElement>): void {
    history.push(`/${props.key}`);
  }


  return (
    <Layout style={layoutStyle}>
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
export default Profile;