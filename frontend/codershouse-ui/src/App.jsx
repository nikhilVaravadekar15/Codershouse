import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Authenticate from './pages/Authenticate';
import Home from './pages/Home';
import Register from "./pages/Register"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path={"/"} exact>
            <Home />
          </Route>
          <Route path={"/authenticate"} >
            <Authenticate />
          </Route>
          {/* <Route path={"/register"} >
            <Register />
          </Route> */}
        </Switch>
      </BrowserRouter>
    </div>
  )
}


export default App
