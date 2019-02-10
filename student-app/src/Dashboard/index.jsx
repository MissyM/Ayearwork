import React from 'react'
import { Route } from 'react-router-dom'
import "./styles.css"
//Componentes principales de la aplicación
import NavBar from './NavBar/index'
import Browser from './Browser'
import Activities from './Activities/index'
import Learning from './Activities/Learning'
import Training from './Activities/Training'

export default function ({ location, history }) {
  return <div className="dashboard">
  
    <NavBar
      withBrowserNavBar={location.pathname !== "/buscador" && location.pathname !== "/buscador/" } 
    />
   
    <div className="content">
      <Route path="/buscador" exact component={Browser}/>
      <Route path="/buscador/activities" exact component={Activities}/>
      <Route path="/buscador/activities/learning" component={props => <Learning key={location.search} {...props} />}/>
      <Route path="/buscador/activities/training" component={Training}/>
    </div>
  </div>
}

