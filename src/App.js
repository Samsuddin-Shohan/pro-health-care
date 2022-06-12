import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AppointmentForm from './components/AppointmentForm/AppointmentForm';
import ServiceForm from './components/ServiceForm/ServiceForm';
import AuthProvider from './context/AuthProvider';
import AppointmentList from './pages/AppointmentList/AppointmentList';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Registraion from './pages/Registration/Registraion';

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

          <Route path={`/login`}>
            <Login></Login>
          </Route>
          <Route path={`/register`}>
            <Registraion></Registraion>
          </Route>
          <Route path={`/crateservice`}>
            <ServiceForm></ServiceForm>
          </Route>
          <Route path={`/createappointment`}>
            <AppointmentForm></AppointmentForm>
          </Route>
          <Route path={`/appointmentlist`}>
            <AppointmentList></AppointmentList>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
