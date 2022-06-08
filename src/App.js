import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Doctors from './pages/Doctors/Doctors';
import Branches from './pages/Branches/Branches';
import Login from './pages/Login/Login';
import Registraion from './pages/Registration/Registraion';


function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
              <Route exact path={`/`}>
                  <Home></Home>
              </Route>
              <Route path={`/home`}>
                  <Home></Home>
              </Route>
              <Route path={`/doctors`}> 
                <Doctors></Doctors>
              </Route>
              <Route path={`/branches`}>
                <Branches></Branches>
              </Route>
              <Route path={`/login`}>
                <Login></Login>
              </Route>
              <Route path={`/register`}>
                <Registraion></Registraion>
              </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
