import React from 'react'

import { BrowserRouter as Router, Switch, Route   } from 'react-router-dom'


import Login from './pages/Login/Login'

import AppState from './contexts/AppState';


import PageError from './pages/Error/PageError';
import LandingPage from './pages/LandingPage/LandingPage';
import Dashboard from './pages/DashboardPage/Dashboard';


const App = () => {

  return (
    <AppState>
    <Router>
               
      <Switch>
         <Route exact path="/landing" component={LandingPage} />
    
        
      
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
     
      <Route exact path="*"  component={PageError} />
      
      </Switch>
      </Router>
    // </AppState>
  )
}

export default App
