import React, { Component } from 'react'
import Tema from './Tema'


import './stylesFilters.css'

class Filter extends Component {
  render() {
    return (
      <div className="contentFilters">
        <Tema/>
        <Tema/>
        <Tema/>
        <Tema/>
        <Tema/>
        <Tema/>
      </div>
    )
  }
}

export default Filter