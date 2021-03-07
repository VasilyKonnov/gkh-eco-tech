import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import LoadingSpin from './components/LoadingSpin';
import LoginPage from './pages/LoginPage/LoginPage';
import Profile from './pages/Profile';

const App: React.FC = () => {
  const isAuth = false;
  let fetchingState = 'success';

  if (fetchingState === 'loading') {
    return <LoadingSpin />
  }

  return (
    <div className="main-content">
      <Switch>
        {
          isAuth
            ?
            <>
              <Route exact path="/payments" component={Profile} />
              <Route path="/metering" component={Profile} />
              <Route path="/tickets" component={Profile} />
              <Route path="/services" component={Profile} />
              <Route path="/news" component={Profile} />
              <Route path="*">
                <Redirect to="/payments" />
              </Route>
            </>
            :
            <Route path="/" component={LoginPage} />
        }
      </Switch>
    </div>
  );
};

export default App;
