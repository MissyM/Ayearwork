import React from 'react'
import { Route } from 'react-router-dom'

import Main from './Main'
import Topics from './Topics'
import Learn from './Learn'

export default function ({ match }) {
  return <div>
    Dashboard
    <Route path={`${match.url}/`} exact component={Main}/>
    <Route path={`${match.url}/topics`} component={Topics}/>
    <Route path={`${match.url}/learn/:topicId`} component={Learn}/>
  </div>
}
