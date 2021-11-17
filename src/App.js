import React from 'react'

import { BrowserRouter as Router, Switch, Route   } from 'react-router-dom'
import AppState from './contexts/AppState';
import PageError from './pages/Error/PageError';
import LandingPage from './pages/LandingPage/LandingPage';
import Dashboard from './pages/DashboardPage/Dashboard';
import Login from './pages/Login/Login';
import ResetPassword from './pages/PasswordReset/PasswordReset'
import EmailSent from './pages/PasswordReset/EmailSent'
import NewPassword from './pages/PasswordReset/NewPassword'
import ResetSuccessful from './pages/PasswordReset/ResetSuccessful';


const App = () => {

  return (
    <AppState>
    <Router>
               
      <Switch>
         <Route exact path="/landing" component={LandingPage} />
         <Route exact path="/" component={Login} />
         <Route exact path="/forgetpassword" component={ResetPassword} />
         <Route exact path="/emailsent" component={EmailSent} />
      <Route exact path="/newpassword/:id" component={NewPassword} />
      <Route exact path="/resetsuccess" component={ResetSuccessful} />

        <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="*"  component={PageError} />
      </Switch>
      </Router>
    </AppState>
  )
}

export default App
