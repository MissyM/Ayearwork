import React from 'react'

import './stylesFilters.css'

export default class Todo extends React.Component {
  render() {
    return (
      <div className="contentCard">
        <img className="formatResourceIcon" src={require("./assetsDashboard/ic-pdf.svg")} alt="pdf"/>
        <div className="cardTema">
          <div className="titleCard">Titulo del tema</div>
          <div className="metadata">
            <p>
              Aqui van metadatos de la targeta del tema
            </p>
          </div>
        </div>
      </div>
    ) 
  }
}