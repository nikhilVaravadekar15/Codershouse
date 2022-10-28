import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Activate from './pages/Activate';
import Authenticate from './pages/Authenticate';
import Home from './pages/Home';
import Rooms from './pages/Rooms';

const isAuth = true;
const user = {
  activated: false
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <GuestRoute path={"/"} exact>
            <Home />
          </GuestRoute>
          <GuestRoute path={"/authenticate"}>
            <Authenticate />
          </ GuestRoute>
          <SemiProtectedRoute path={"/activate"}>
            <Activate />
          </ SemiProtectedRoute>
          <ProtectedRoute path={"/rooms"}>
            <Rooms />
          </ ProtectedRoute>
        </Switch>
      </BrowserRouter>
    </div>
  )
}


function GuestRoute({ children, ...rest }) {
  return (
    <Route {...rest}
      render={({ location }) => {
        return isAuth ?
          (
            <Redirect to={{
              pathname: "/rooms",
              state: { from: location }
            }} />
          )
          : (
            children
          )
      }}
    ></Route>
  )
}

function SemiProtectedRoute({ children, ...rest }) {
  return (
    <Route {...rest}
      render={({ location }) => {
        return !isAuth ?
          (
            <Redirect to={{
              pathname: "/authenticate",
              state: { from: location }
            }} />
          ) : isAuth && !user.activated ?
            (
              children
            ) :
            (
              <Redirect to={{
                pathname: "/rooms",
                state: { from: location }
              }} />
            )
      }}
    ></Route>
  )
}

function ProtectedRoute({ children, ...rest }) {
  return (
    <Route {...rest}
      render={({ location }) => {
        return !isAuth ?
          (
            <Redirect to={{
              pathname: "/authenticate",
              state: { from: location }
            }} />
          ) : isAuth && !user.activated ?
            (
              <Redirect to={{
                pathname: "/activate",
                state: { from: location }
              }} />
            ) :
            (
              children
            )
      }}
    ></Route>
  )
}


export default App
