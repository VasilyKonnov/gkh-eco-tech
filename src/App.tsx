import { Route, Switch, Redirect } from 'react-router-dom';
import { PageContainer } from './components';
import { Spin } from 'antd';
import LoginPage from './components/LoginPage/LoginPage';
const LoadingPage: React.FC = () => <Spin size="large" />;

const App: React.FC = () => {
  const isAuth: boolean = false;
  const fetchingState: string = 'success';

  const pageContent = () =>
    fetchingState === 'loading' ? (
      <LoadingPage />
    ) : isAuth ? (
      <PageContainer />
    ) : (
          <Redirect to="/" />
        );

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        background: '#f2f2f2',
        margin: '0 auto',
        minHeight: '100vh',
      }}
    >
      <Switch>
        <Route path="/" component={LoginPage} />
        <Route exact path="/payments" component={pageContent} />
        <Route path="/metering" component={pageContent} />
        <Route path="/tickets" component={pageContent} />
        <Route path="/services" component={pageContent} />
        <Route path="/news" component={pageContent} />
        <Route path="*">
          <Redirect to="/payments" />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
