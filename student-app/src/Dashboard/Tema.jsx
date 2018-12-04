import React from 'react'

const tema= {
  display: 'flex',
  width: '80%',
  height: '100px',
  marginTop: '30px',
}
const cardTema= {
  width:' 80%',
  color: '#B1B1B2',
}
const titleCardTema= {
  padding: '15px 0px 0px 15px',
  fontWeight: 'bolder',
}
const metadataTema= {
  padding: '0px 15px',
  fontSize: '14px',
}
const iconsContent= {
  position: 'absolute',
  right: '200px',
  height: '30px',
}
const aprendizajeIcon= {
  height: '30px',
  width: '30px',
  margin: '0px 10px',
  border: '2px solid  rgb(209, 214, 209)',
  borderRadius: '50px',
  background:  'rgb(209, 214, 209)',
}
const entrenarIcon= {
  height: '30px',
  background: 'rgb(209, 214, 209)',
  border: '2px solid  rgb(209, 214, 209)',
  borderRadius: '50px',
  width: '30px',
  margin: '0px 10px',
}
const competirIcon= {
  width: '30px',
  height: '30px',
  background:  'rgb(209, 214, 209)',
  border: '2px solid  rgb(209, 214, 209)',
  borderRadius: '50px',
  margin: '0px 10px',
}

export default class Tema extends React.Component {
  render() {
    return (
      <div style={tema}>
        <div style={cardTema}>
          <div style={titleCardTema}>1.Números Naturales</div>
          <div style={metadataTema}>
            <ul>
              <li>1.1 Sistema de Numeración</li>
              <li>1.2 Operaciones en el conjunto de los números naturales</li>
            </ul>
          </div>
          <div style={iconsContent}>
            <img  style={aprendizajeIcon} src={require("./assetsDashboard/ic_aprendizaje-01.svg")} alt="Aprendizaje"/>
            <img  style={entrenarIcon} src={require("./assetsDashboard/ic_entrenamiento-01.svg")} alt="Entrenamiento"/>
            <img  style={competirIcon} src={require("./assetsDashboard/ic_competencia.svg")} alt="Competencia"/>
          </div>
        </div>
      </div>
    ) 
  }
}

