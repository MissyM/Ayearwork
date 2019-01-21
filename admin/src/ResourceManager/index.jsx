import React from 'react'
import {  BrowserRouter as Router, Route } from 'react-router-dom'

import Topics from './Topics'
import Upload from './Upload'

export default function () {
  return (
  <Router>
    <div className="ResourceManager">
      <Route path="/" exact component={Topics}/>   
      <Route path="/upload" component={Upload}/>   
    </div>
  </Router>
  )
}