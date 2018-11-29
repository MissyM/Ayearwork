import React from 'react'

import './stylesFilters.css'

export default class Ppt extends React.Component {
  render() {
    return (
      <div className="contentCard">
        <img className="formatResourceIcon" src={require("./assetsDashboard/ppt-icon.png")} alt="pdf"/>
        <div className="cardTema">
          <div className="titleCard">Titulo del Power Point</div>
          <div className="metadata">
            <p>
              Aqui van metadatos de la Tarjeta
            </p>
          </div>
        </div>
      </div>
    ) 
  }
}
