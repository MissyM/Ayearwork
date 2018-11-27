import React, { Component } from 'react'
import Tema from './Tema'


import './stylesFilters.css'

class Filter extends Component {
  render() {
    return (
      <div className="contentFilters">
        {/*Titulos de los filtros */}
      
        {/*Cuerpo del filtros */}
        <div className="contentBodyFilter">
        {/*Tarjetas del filtro. TODO: Hacer map */}
          <Tema/>
        </div>
      </div>
    )
  }
}

export default Filter