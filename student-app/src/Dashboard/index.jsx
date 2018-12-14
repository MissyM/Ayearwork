import React from 'react'
import { Route } from 'react-router-dom'
import "./styles.css"

import NavBar from './NavBar/index'
import Browser from './Browser'
import Filters from './Filters/index'
import Topics from './Topics'
import Main from './Activities/index'
import Learn from './Activities/Learning'
import Breadcrumbs from './Breadcrumbs/index'

export default function ({ location }) {
  return <div className="dashboard">
    <NavBar
      withBrowserNavBar={location.pathname !== "/dashboard" && location.pathname !== "/dashboard/" } 
      withFiltersContent={location.pathname.startsWith("/dashboard/filters") }
    />
    <Breadcrumbs></Breadcrumbs>
    <div className="content">
      <Route path="/dashboard/" exact component={Browser}/>
      <Route path="/dashboard/filters/:type" component={Filters}/>
      <Route path="/dashboard/main" component={Main}/>
      <Route path="/dashboard/topics" component={Topics}/>
      <Route path="/dashboard/learn/:topicId" component={Learn}/>
    </div>
  </div>
}
