import React from 'react'
import { Route } from 'react-router-dom'
import "./styles.css"

import NavBar from './NavBar/index'
import Browser from './Browser'
import Filters from './Filters/index'
import Activities from './Activities/index'
import Learning from './Activities/Learning'
import Breadcrumbs from './Breadcrumbs'

export default function ({ location, history }) {
  return <div className="dashboard">
    <NavBar
      withBrowserNavBar={location.pathname !== "/buscador" && location.pathname !== "/buscador/" } 
      withFiltersContent={location.pathname.startsWith("/buscador/filters")}
    />
    {location.pathname !== '/buscador' && <Breadcrumbs
      segments={[
        ...location.pathname.split('/').filter(segment => segment !== ''),
        ...location.pathname === '/buscador/activities/learning' ? ['tema', 'subtema'] : [],
      ]}
      onClick={segments => history.push(`/${segments.join('/')}`)}
    />}
    <div className="content">
      <Route path="/buscador" exact component={Browser}/>
      <Route path="/buscador/filters" exact component={Filters}/>
      <Route path="/buscador/activities" exact component={Activities}/>
      <Route path="/buscador/activities/learning" component={Learning}/>
    </div>
  </div>
}
