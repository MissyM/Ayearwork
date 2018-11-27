import React, { Component } from 'react'

class Filter extends Component {
  render() {
    return (
      <div className="contentFilters">
        {/*Titulos de los filtros */}

        <div className="divTitle">Filtro1
          <div className="buttonDiv"></div>
        </div>
        <div className="divTitle">Filtro2
          <div className="buttonDiv"></div>
        </div>
        <div className="divTitle">Filtro3
          <div className="buttonDiv"></div>
        </div>
        {/*Cuerpo del filtros */}
        <div className="contentBodyFilter">
        </div>
      </div>
    )
  }
}

export default Filter