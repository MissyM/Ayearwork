import React from 'react'

import './stylesNavBar.css'

export default class FiltersTitles extends React.Component {
  render() {
    return (
      <div className="contentTitles">
        <div className="divTitle">Filtro1
         <div className="buttonDiv"/>
        </div>
        <div className="divTitle">Filtro2
          <div className="buttonDiv"></div>
        </div>
        <div className="divTitle">Filtro3
          <div className="buttonDiv"></div>
        </div>
      </div>
    )
  }
}