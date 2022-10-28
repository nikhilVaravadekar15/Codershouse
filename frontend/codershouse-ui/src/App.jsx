import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Activate from './pages/Activate';
import Authenticate from './pages/Authenticate';
import Home from './pages/Home';
import Register from "./pages/Register"
import Rooms from './pages/Rooms';

const isAuth = false;

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
          <Route path={"/activate"} >
            <Activate />
          </Route>
          <Route path={"/rooms"} >
            <Rooms />
          </Route>
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


export default App
