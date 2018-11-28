import React from 'react'
import { Route } from 'react-router-dom'
import "./styles.css"

import NavBar from './NavBar'
import Browser from './Browser'
import Filters from './Filters'
import Topics from './Topics'
import Main from './Main'
import Learn from './Learn'

import Todo from './Todo'
import Pdf from './Pdf'
import Video from './Video'
import Ppt from './Ppt'
import Tema from './Tema'


export default function ({ location }) {
  return <div className="dashboard">
    <NavBar
      withBrowserNavBar={location.pathname !== "/dashboard"} 
      withFiltersContent={location.pathname.startsWith("/dashboard/filters") }
    />
    <div className="content">
      <Route path="/dashboard/main" component={Main}/>
      <Route path="/dashboard/" exact component={Browser}/>
      <Route path="/dashboard/filters/:type" component={Filters}/>
      <Route path="/dashboard/topics" component={Topics}/>
      <Route path="/dashboard/learn/:topicId" component={Learn}/>
    </div>
  </div>
}
