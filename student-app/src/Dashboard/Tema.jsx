 import React from 'react'
import styled from 'styled-components'

const Card = styled.div `
  width: 50%;
  color: #B1B1B2;
`
const Title = styled.div `
  padding: 15px 0px 0px 15px;
  font-weight: bolder;
`
const P = styled.p `
  padding: 0px 50px 0px  300px;
  font-size: 14px;
`
const Content = styled.div`
  position: absolute;
  right: 200px;
  height: 30px;
`
const AprendizajeIcon = styled.img.attrs({
  src: require("./assetsDashboard/ic_aprendizaje-01.svg"),
  alt: "Aprendizaje",
})` 
  height: 30px;
  width: 30px;
  margin: 0px 10px;

  border-radius: 50px;
  
`
const EntrenarIcon = styled.img.attrs({
  src: require("./assetsDashboard/ic_entrenamiento-01.svg"),
  alt:"Entrenamiento",
})`
  height: 30px;
  background: rgb(209, 214, 209);

  border-radius: 50px;
  width: 30px;
  margin: 0px 10px;
`
const CompetirIcon = styled.img.attrs({
  src: require("./assetsDashboard/ic_competencia.svg"), 
  alt: "Competencia",
})`
  width: 30px; 
  height: 30px;
  border-radius: 50px;
  margin: 0px 10px;
`

export default class Tema extends React.Component {
  render() {
    return (
      <Card>
        <Title >1.Números Naturales</Title>
          <P>1.1 Sistema de Numeración</P>
          <P>1.2 Operaciones en el conjunto de los números naturales</P>
        <Content>
          <AprendizajeIcon />
          <EntrenarIcon />
          <CompetirIcon />
        </Content>
      </Card>
    ) 
  }
}

