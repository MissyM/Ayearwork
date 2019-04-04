import React, { Component } from 'react'
import { HashRouter as Router, Route, Redirect } from 'react-router-dom'

import './App.css'
import { isStarted } from './services/session'
import AppWrap from './AppWrap'
import PrivateRoute from './PrivateRoute'

import Login from './Login'
import Register from './Register/Index'
import Dashboard from './Dashboard'

class App extends Component {
  render() {
    return (
      <Router>
        <AppWrap>
          <Route exact path="/" render={() => (
            isStarted() ? (
              <Redirect to="/buscador"/>
            ) : (
              <Redirect to="/login"/>
            )
          )}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <PrivateRoute path="/buscador" component={Dashboard}/>
        </AppWrap>
      </Router>
    )
  }
}

export default App
