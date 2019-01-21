import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

export default class Main extends React.Component {
render() {
  return(
    <div >
      <div className="welcome">
        <h1 >¡Hola {this.props.username}!</h1>
        <p>Bienvenido a esta experiencia de conocimiento.</p>
      </div>
      <div className="contentLinks">
        <div className="leftDiv">
          <Link to="/buscador/learning" className="linktoTopics">
            <div className="tooltip">
              <img className="infoIcon" src={require('../assetsDashboard/ic_info-01.svg')} alt="Info"/>
              <span className="tooltiptext">En Aprendizaje encuentras el material 
                visto en clase que necesitas reforzar.
              </span>
            </div>
            <div className="learning">
              <h2>Aprendizaje</h2>
              <p>Si algo deseo saber, entrando aquí puedo aprender. Profundizo en mi aprendizaje y luego entreno con coraje. </p>
              <img className="aprendizaje" src={require('../assetsDashboard/ic_aprendizaje-01.svg')} alt="IconoAprendizaje" />
            </div>
          </Link>
        </div>
        <div className="rightDiv">
          <div className="highRightDiv">
            <div className="tooltip">
              <img className="infoIcon2" src={require('../assetsDashboard/ic_info-01.svg')} alt="info Aprendizaje"/>
              <span className="tooltiptext">En Entrenamiento encuentras preguntas 
                con las que te puedes preparar para la competencia.
              </span>
            </div>
            <img className="entrenamiento" src={require('../assetsDashboard/ic_entrenamiento-01.svg')} alt="IconoAprendizaje" />
            <h2 className="linkYellow">Entrenamiento</h2>
            <p className="paragraph">El entrenamiento me prepara para la competencia. </p>
          </div>
          <div className="lowRightDiv">
            <div className="tooltip">
              <img className="infoIcon2" src={require('../assetsDashboard/ic_info-01.svg')} alt="Info"/>
              <span className="tooltiptext">En Competencia puedes saber que tanto has aprendido. Se parece mucho a
                Entrenamiento, pero tienes tiempo limitado y recibes gratificación por las 
                respuestas correctas. 
              </span>
            </div>
            <img className="competencia" src={require('../assetsDashboard/ic_competencia.svg')} alt="IconoAprendizaje" />
            <h2 className="link">Competencia</h2>
            <p className="paragraph"> Compitiendo demuestro mi conocimiento. </p>
          </div>
        </div>
      </div>
    </div>
    )
  }
}