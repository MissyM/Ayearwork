import React from 'react' 
import { Route, Redirect } from 'react-router-dom' 
import { isStarted } from './services/session'

/**Esta funcion recibe unn componente y si isStarted es true 
 * renderiza un componente y si es false lo saca al login.
 * No permite que ingresen sin iniciar sesion
 */

export default function ({ component: Component, ...rest }) {
  return <Route {...rest} render={
    props => isStarted() ? <Component {...props} /> : <Redirect to="/login" />
  }/>
}
