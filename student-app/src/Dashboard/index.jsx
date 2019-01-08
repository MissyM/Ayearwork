import React from 'react'
import { Route } from 'react-router-dom'
import "./styles.css"

import NavBar from './NavBar/index'
import Browser from './Browser'
import Filters from './Filters/index'
import Activities from './Activities/index'
import Learning from './Activities/Learning'
import Breadcrumbs from './Breadcrumbs/index'

export default function ({ location }) {
  return <div className="dashboard">
    <NavBar
      withBrowserNavBar={location.pathname !== "/dashboard" && location.pathname !== "/dashboard/" } 
      withFiltersContent={location.pathname.startsWith("/dashboard/filters")}
    />
    <Breadcrumbs></Breadcrumbs>
    <div className="content">
      <Route path="/dashboard" exact component={Browser}/>
      <Route path="/dashboard/filters" exact component={Filters}/>
      <Route path="/dashboard/activities" exact component={Activities}/>
      <Route path="/dashboard/activities/learning" component={Learning}/>
    </div>
  </div>
}
