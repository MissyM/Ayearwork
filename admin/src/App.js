import React from 'react'
import {  BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'

import Topics from './Topics'
import Upload from './Upload'

export default function () {
  return (
  <Router>
    <div className="App">
      <Route path="/" exact component={Topics}/>   
      <Route path="/upload" component={Upload}/>   
    </div>
  </Router>
  )
}
