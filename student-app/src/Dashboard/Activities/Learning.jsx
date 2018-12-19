import React from 'react'

import styled from 'styled-components'

const Container = styled.div `
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #ffffff;
  padding-top: 47px;
`
const LearningContainer = styled.div `
  width: 90%;
  display: flex;
  padding-top: 47px;
`
const LeftDiv = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 70%;
`

const ResourceContent = styled.div `
  height: 70%;
  width: 98%;
  margin-top: -100px;
  background-color: blue;
`
const Title = styled.div `
  height: 30px;
  width: 98%;
  margin-top: 10px;
  font-size: 26px;
  font-weight: bold;
`
const ViewContent = styled.div`
  display: flex;
  width: 98%;
  height: 30px;
  margin-top: 10px;
  color: #999999;
`
const View = styled.div `
  height: 30px;
  width: 50%;
`
const LikeIcon = styled.img.attrs ({
  src: require("../assetsDashboard/ic-like.png"),
  alt: "Like",
})`
  height: 18px;
  width: 18px;
  margin-right: 10px;
`
const Label = styled.div `
  padding-right: 100px;
  color: #999999;
`
const UploadIcon = styled.img.attrs ({
  src: require("../assetsDashboard/mas.png"),
  alt: "Agregar Video",
})`
height: 18px;
width: 18px;
margin-right: 10px;
`
const ShareIcon = styled.img.attrs ({
  src: require("../assetsDashboard/share.png"),
  alt: "Compartir",
})`
  height: 18px;
  width: 18px;
  margin-right: 10px;
`
/*Contenedor derecho*/
const RightDiv = styled.div `
  height: 100%;
  width: 30%;
`
const PreviewContainerNext = styled.div`
  display: flex;
  height: 110px;
  width: 100%;
  border-bottom: 1.5px solid #d8d8e0;
`
const PreviewNext = styled.div`
  height: 100px;
  width: 40%;
  background-color: blue;
`
const Preview = styled.div`
  height: 100px;
  width: 40%;
  background-color: blue;
`
const TextContent = styled.div`
  width: 60%;
`
const LitleTitle = styled.div `
  font-weight: bold;
`
const PreviewContainer = styled.div`
  margin-top: 10px;
  display: flex;
  height: 100px;
  width: 100%;
`
const Content = styled.div`
  width: 100%;
  height: 440px;
  border-bottom: 1.5px solid #d8d8e0;
  margin-right: 10px;
`
//Aqui se renderiza los contenidos que el estudiante va a aprender
export default class extends React.Component {
  render () {
    return (
      <Container>
        <LearningContainer>
          <LeftDiv>
            <ResourceContent/>
            <Title>4-1 Suma de Fracciones Homogeneas</Title>
            <ViewContent>
              <View>4 Visualizaciones</View>
              <LikeIcon/>
              <Label>10</Label>
              <UploadIcon/>
              <Label>Subir</Label>
              <ShareIcon/>
              <Label>Compartir</Label>
            </ViewContent>
          </LeftDiv>
          <RightDiv>
            <Label>Siguiente</Label>
            <PreviewContainerNext>
              <PreviewNext/>
              <TextContent>
                <LitleTitle>4_2 Resta de Fracciones Homogeneas</LitleTitle>
                <Label>Matemáticas</Label>
              </TextContent>
            </PreviewContainerNext>
            <Content>
              <PreviewContainer>
                <Preview/>
                <TextContent>
                  <LitleTitle>4_2 Resta de Fracciones Homogeneas</LitleTitle>
                  <Label>Matemáticas</Label>
                </TextContent>
              </PreviewContainer>
              <PreviewContainer>
                <Preview/>
                <TextContent>
                  <LitleTitle>4_2 Resta de Fracciones Homogeneas</LitleTitle>
                  <Label>Matemáticas</Label>
                </TextContent>
              </PreviewContainer>
              <PreviewContainer>
                <Preview/>
                <TextContent>
                  <LitleTitle>4_2 Resta de Fracciones Homogeneas</LitleTitle>
                  <Label>Matemáticas</Label>
                </TextContent>
              </PreviewContainer>
              <PreviewContainer>
                <Preview/>
                <TextContent>
                  <LitleTitle>4_2 Resta de Fracciones Homogeneas</LitleTitle>
                  <Label>Matemáticas</Label>
                </TextContent>
              </PreviewContainer>
            </Content>
          </RightDiv>
        </LearningContainer>
      </Container>
    )
  }
}
