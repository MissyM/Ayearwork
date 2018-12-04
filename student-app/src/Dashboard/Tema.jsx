import React from 'react'
import styled from 'styled-components'
import styled, { css } from 'styled-components'

const Card= styled.div `
  width: 50%;
  color: #B1B1B2;
`
const Title= styled.div `
  padding: 15px 0px 0px 15px;
  font-weight: bolder;
`
const Ul= styled.ul `
  padding: 0px 15px;
  font-size: 14px;
`
const Content= styled.div`
  position: absolute;
  right: 200px;
  height: 30px;
  `
const AprendizajeIcon= styled.img` 
  height: 30px;
  width: 30px;
  margin: 0px 10px;
  border: 2px solid  rgb(209, 214, 209);
  border-radius: 50px;
  background:  rgb(209, 214, 209);
  `
const EntrenarIcon= styled.img`
  height: 30px;
  background: rgb(209, 214, 209);
  border: 2px solid  rgb(209, 214, 209);
  border-radius: 50px;
  width: 30px;
  margin: 0px 10px;
`
const CompetirIcon= styled.img`
  width: 30px; 
  height: 30px;
  background:  rgb(209, 214, 209);
  border: 2px solid  rgb(209, 214, 209);
  border-radius: 50px;
  margin: 0px 10px;
`

export default class Tema extends React.Component {
  render() {
    return (
      <Card>
        <Title >1.Números Naturales</Title>
          <Ul>
            <li>1.1 Sistema de Numeración</li>
            <li>1.2 Operaciones en el conjunto de los números naturales</li>
          </Ul>
        <Content>
          <img  style={aprendizajeIcon} src={require("./assetsDashboard/ic_aprendizaje-01.svg")} alt="Aprendizaje"/>
          <img  style={entrenarIcon} src={require("./assetsDashboard/ic_entrenamiento-01.svg")} alt="Entrenamiento"/>
          <img  style={competirIcon} src={require("./assetsDashboard/ic_competencia.svg")} alt="Competencia"/>
        </Content>
      </Card>
    ) 
  }
}

