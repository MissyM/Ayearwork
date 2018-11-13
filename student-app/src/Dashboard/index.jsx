import React from 'react'
import { Route } from 'react-router-dom'
import "./styles.css"

import Main from './Main'
import Topics from './Topics'
import Learn from './Learn'
import NavBar from './NavBar'



export default function ({ match }) {
  return <div className="dashboard">
    <NavBar/>
    <div className="content">
      <Route path="/dashboard" exact component={Main}/>
      <Route path="/dashboard/topics" component={Topics}/>
      <Route path="/dashboard/learn/:topicId" component={Learn}/>
    </div>
  </div>
}
