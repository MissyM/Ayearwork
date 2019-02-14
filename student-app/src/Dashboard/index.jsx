import React from 'react'
import { Route } from 'react-router-dom'
import "./styles.css"
//Componentes principales de la aplicación
import Browser from './Browser'
import Learning from './Learning/index'
import Training from './Learning/index'

export default function ({ location, history }) {
  return <div className="dashboard">
    <div className="content">
      <Route path="/buscador" exact component={Browser}/>
      <Route path="/buscador/learning" component={props => <Learning key={location.search} {...props} />}/>
      <Route path="/buscador/training" component={Training}/>
    </div>
  </div>
}

