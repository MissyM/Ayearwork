import React from 'react'

import './stylesFilters.css'

export default class Tema extends React.Component {
  render() {
    return (
      <div className="contentCard">
        <img className="formatResourceIcon" src={require("./assetsDashboard/ic-pdf.svg")} alt="pdf"/>
        <div className="cardTema">
          <div className="titleCard">Titulo del tema</div>
          <div className="metadata">
            <p>
              Aqui van metadatos de la targeta
            </p>
          </div>
          <div className="iconsContent">
            <img  className="aprendizajeIcon" src={require("./assetsDashboard/ic_aprendizaje-01.svg")} alt=""/>
            <img  className="entrenarIcon" src={require("./assetsDashboard/ic_entrenamiento-01.svg")} alt=""/>
            <img  className="competirIcon" src={require("./assetsDashboard/ic_competencia.svg")} alt=""/>
          </div>
        </div>
      </div>
    ) 
  }
}
