import React from 'react'
import styled from 'styled-components'

const Card = styled.div `
  height: 122px;
  width: 512px;
  color: #B1B1B2;
  background-color: #fdfdfd;
  box-shadow: 0px 7px 10px 0 rgba(0, 0, 0, 0.03);
  margin-bottom: 15px;
`
const Title = styled.div `
  font-weight: bolder;
  color: #7d6bf9;
  font-size: 16.5px;
  font-weight: normal;
`
const P = styled.p `
  display: flex;
  align-items: center;
  font-size: 14px;
  margin: 0px;
  padding:  0px 20px;
  justify-content: space-between;
`
const Content = styled.div`
  display: flex;
`
const AprendizajeIcon = styled.img.attrs({
  src: require("../assetsDashboard/ic_aprendizaje-01.svg"),
  alt: "Aprendizaje",
})` 
  height: 25px;
  width: 25px;
  margin: 0px 10px;
  border-radius: 50px;
  
`
const EntrenarIcon = styled.img.attrs({
  src: require("../assetsDashboard/ic_entrenamiento-01.svg"),
  alt:"Entrenamiento",
})`
  height: 25px;
  background: rgb(209, 214, 209);
  border-radius: 50px;
  width: 25px;
  margin: 0px 10px;
`
const CompetirIcon = styled.img.attrs({
  src: require("../assetsDashboard/ic_competencia.svg"), 
  alt: "Competencia",
})`
  width: 25px; 
  height: 25px;
  border-radius: 50px;
  margin: 0px 10px;
`

export default class Tema extends React.Component {
  render() {
    return (
      <Card>
        <Title >1.Números Naturales</Title>
          <P>1.1 Sistema de Numeración
            <Content>
              <AprendizajeIcon />
              <EntrenarIcon />
              <CompetirIcon />
            </Content>
          </P>
          <P>1.2 Operaciones en el conjunto de los números naturales
            <Content>
              <AprendizajeIcon />
              <EntrenarIcon />
              <CompetirIcon />
            </Content>
          </P>
      </Card>
    ) 
  }
}

