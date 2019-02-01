import React from 'react'
import { Route } from 'react-router-dom'
import "./styles.css"
//Componentes principales de la aplicación
import NavBar from './NavBar/index'
import Browser from './Browser'
import Filters from './Filters/index'
import Activities from './Activities/index'
import Learning from './Activities/Learning'
import Breadcrumb from './Breadcrumb'

export default function ({ location, history }) {
  return <div className="dashboard">
    <NavBar
      withBrowserNavBar={location.pathname !== "/buscador" && location.pathname !== "/buscador/" } 
      withFiltersContent={location.pathname.startsWith("/buscador/filtros")}
    />
    {location.pathname !== '/buscador' && <Breadcrumb
      segments={[
        ...location.pathname.split('/').filter(segment => segment !== ''),
        ...location.pathname === '/buscador/activities/learning' ? ['tema', 'subtema'] : [],
      ]}
      // onClick={segments => history.push(`/${segments.join('/')}`)}
    />}
    <div className="content">
      <Route path="/buscador" exact component={Browser}/>
      <Route path="/buscador/filtros" exact component={props => <Filters key={location.search} {...props} />}/>
      <Route path="/buscador/activities" exact component={Activities}/>
      <Route path="/buscador/activities/learning" component={props => <Learning key={location.search} {...props} />}/>
    </div>
  </div>
}

//const getTopicTitle = () =>