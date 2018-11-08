import React from 'react'
import { Route } from 'react-router-dom'
import "./styles.css"

import Main from './Main'
import Topics from './Topics'
import Learn from './Learn'

export default function ({ match }) {
  return <div className="dashboard">
    <div className="navBackGray">
      <div className="navAvobeWhite" />
      <div className="triangleShadowLow" />
    </div>
    <div className="content">
      <div className="dashboardContainer">
        <Route path={`${match.url}/`} exact component={Main}/>
        <Route path={`${match.url}/topics`} component={Topics}/>
        <Route path={`${match.url}/learn/:topicId`} component={Learn}/>
      </div>
    </div>
  </div>
}
