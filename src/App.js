import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import AuthProvider from './context/AuthProvider'
import Branches from './pages/Branches/Branches'
import Doctors from './pages/Doctors/Doctors'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Registraion from './pages/Registration/Registraion'

function App() {
  return (
    <AuthProvider>
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
    </AuthProvider>
  )
}

export default App
