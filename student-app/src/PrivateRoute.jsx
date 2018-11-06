import React from 'react' 
import { Route, Redirect } from 'react-router-dom' 
import { isStarted } from './services/session';

export default function ({ component: Component, ...rest }) {
  return <Route {...rest} render={
    props => isStarted() ? <Component {...props} /> : <Redirect to="/login" />
  }/>
}
