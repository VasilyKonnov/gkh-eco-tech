import { useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { PageWrapper, SpinLoader } from './components'
import { LoginPage, PageBase } from './pages'
import { useSelector, useDispatch } from 'react-redux'
import { userSelector } from './store/user'
import { meterAction } from './store/meter'
import { ticketsAction } from './store/tickets'
import { FetchingStateTypes } from './store'

const App: React.FC = () => {
  const { isAuth, fetchingState } = useSelector(userSelector)

  const dispatch = useDispatch()

  const patches: string[] = [
    '/payments',
    '/metering',
    '/tickets',
    '/services',
    '/profile',
    '/news/:id?',
  ]

  const isCheckingToken =
    window.localStorage.getItem('Token') &&
    fetchingState === FetchingStateTypes.loading

  const pageContent: React.FC = () => {
    if (isCheckingToken) {
      return <SpinLoader />
    }
    return isAuth ? <PageBase /> : <Redirect to="/login" />
  }
  // load all meter types
  useEffect(() => {
    if (isAuth) {
      dispatch(meterAction.getTypes())
      dispatch(ticketsAction.getStatuses())
    }
  }, [dispatch, isAuth])

  return (
    <PageWrapper>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route exact path={patches} component={pageContent} />
        <Route path="*">
          <Redirect to="/payments" />
        </Route>
      </Switch>
    </PageWrapper>
  )
}

export default App
