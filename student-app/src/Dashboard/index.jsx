import React from 'react'
import { Route } from 'react-router-dom'
import "./styles.css"
import Profile from '../Dashboard/components/Profile'
//Componentes principales de la aplicación
import Browser from './Browser'
import Learning from './Learning/index'
import Training from './Learning/Training'

export default function ({ location }) {
  return <div className="dashboard" >
     <Profile/> 
    <div className="content">
      <Route path="/buscador" exact component={Browser}/>
      <Route path="/buscador/learning" component={props => <Learning key={location.search} {...props} />}/>
      <Route path="/buscador/learning/training" component={Training}/>
    </div>
  </div>
}

