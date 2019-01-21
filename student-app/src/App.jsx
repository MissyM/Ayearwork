import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import './App.css'
import { isStarted } from './services/session'
import AppContainer from './AppContainer'
import PrivateRoute from './PrivateRoute'

import Login from './Login'
import Dashboard from './Dashboard'

class App extends Component {
  render() {
    return (
      <Router>
        <AppContainer>
          <Route exact path="/" render={() => (
            isStarted() ? (
              <Redirect to="/buscador"/>
            ) : (
              <Redirect to="/login"/>
            )
          )}/>
          <Route path="/login" component={Login}/>
          <PrivateRoute path="/buscador" component={Dashboard}/>
        </AppContainer>
      </Router>
    )
  }
}

export default App
