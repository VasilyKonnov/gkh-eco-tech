import { Route, Switch, Redirect } from 'react-router-dom';
import { PageWrapper, SpinLoader } from './components';
import { LoginPage, PageBase } from '../src/pages/';
import { useSelector } from 'react-redux';
import { userSelector } from './store/user';
import { FetchingStateTypes } from './store';


const App: React.FC = () => {

  const { isAuth, fetchingState } = useSelector(userSelector);

  const patches: string[] = [
    '/payments',
    '/metering',
    '/tickets/:id?',
    '/services',
    '/admin',
    '/news',
  ];

  const isCheckingToken =
    window.localStorage.getItem('Token') && fetchingState === FetchingStateTypes.loading;

  const pageContent: React.FC = () =>
    isCheckingToken ? <SpinLoader /> : isAuth ? <PageBase /> : <Redirect to="/" />;

  return (
    <PageWrapper>
      <Switch>
        <Route path="/" component={LoginPage} />
        <Route exact path={patches} component={pageContent} />
        <Route path="*">
          <Redirect to="/payments" />
        </Route>
      </Switch>
    </PageWrapper>
  );
};

export default App;