import React from 'react'
import { Route } from 'react-router-dom'
import "./styles.css"

import NavBar from './NavBar'
import Browser from './Browser'
import Filters from './Filters'
import Topics from './Topics'
import Main from './Main'
import Learn from './Learn'

export default function ({ location }) {
  return <div className="dashboard">
    <NavBar
      withBrowserNavBar={location.pathname !== "/dashboard"} 
      withFiltersContent={location.pathname === "/dashboard/filters"}
    />
    <div className="content">
      <Route path="/dashboard/main" component={Main}/>
      <Route path="/dashboard/" exact component={Browser}/>
      <Route path="/dashboard/filters" component={Filters}/>
      <Route path="/dashboard/topics" component={Topics}/>
      <Route path="/dashboard/learn/:topicId" component={Learn}/>
    </div>
  </div>
}
