import { Route, Switch, Redirect } from 'react-router-dom';
import { PageContainer } from './components';
import { Spin } from 'antd';
import { useSelector } from 'react-redux';
import { userSelector } from './store/selectors';

const LoginPage: React.FC = () => <div>Login Page</div>;
const LoadingPage: React.FC = () => <Spin size="large" />;

const App: React.FC = () => {
  const { isAuth, fetchingState } = useSelector(userSelector);
  // const isAuth: boolean = true;
  // const fetchingState: string = 'success';

  const pageContent = () =>
    fetchingState === 'loading' ? (
      <LoadingPage />
    ) : isAuth ? (
      <PageContainer />
    ) : (
      <Redirect to="/login" />
    );

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        background: '#f2f2f2',
        margin: '0 auto',
        height: '100vh',
      }}
    >
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route
          exact
          path={[
            '/payments',
            '/metering',
            '/tickets/:id?',
            '/services',
            '/news',
          ]}
          component={pageContent}
        />
        <Route path="*">
          <Redirect to="/payments" />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
