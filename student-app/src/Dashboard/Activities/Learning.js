import React from 'react'
import styled from 'styled-components'
import { getSubtopic, getRelatedResources } from '../../services/api'


//Aqui se renderiza los contenidos que el estudiante va a aprender
export default class extends React.Component {

  state = {
    state: 'loading',
    actualResource: { title: '...' },
    nextResource:{ title: '...' },
    otherResources: [],
  }

  componentDidMount() {
    const search = this.props.location.search
    const params = new URLSearchParams(search)
    const id = params.get('id')
    const order = params.get('order')
    let resources
    if (order=='subtopic') {
      const subtopic = getSubtopic(id)
      resources = subtopic.resources
    } else if(order=='resource'){
      resources = getRelatedResources(id)
    }
    if(resources.length > 0){
      this.setState({
        state: 'loaded',
        actualResource: resources[0],
        nextResource: resources[1],
        otherResources: resources.slice(2),
      })
    }
    else {
      this.setState({
        state: 'noResources',
      })
    }
  }

  render () {
    const { actualResource, nextResource, otherResources, state } = this.state

    return (
      state === 'noResources' ? (
        <h1>No hay recursos en este subtema</h1>
      ) : <Container>
        <LearningContainer>
          <ContentContainer>
            <ResourceView resource={actualResource} />
            <Title>{actualResource.title}</Title>
            <Toolbar>
              <View>4 Visualizaciones</View>
              <LikeIcon/>
              <Label>10</Label>
              <UploadIcon/>
              <Label>Subir</Label>
              <ShareIcon/>
              <Label>Compartir</Label>
            </Toolbar>
          </ContentContainer>

          <OtherContent>
            <Label>Siguiente</Label>

            <PreviewContainer>
              <PreviewNext/>
              <TextContent>
                <LitleTitle>{nextResource.title}</LitleTitle>
                <Label>Matemáticas</Label>
              </TextContent>
            </PreviewContainer>

            <NextResourceDivider />
            {otherResources.map( (r) => 
              <Content key= {otherResources.indexOf(r)}>
                <PreviewContainer>
                  <Preview/>
                  <TextContent>
                    <LitleTitle>{r.title}</LitleTitle>
                    <Label>Matemáticas</Label>
                  </TextContent>
                </PreviewContainer>
              </Content>
            )}
          </OtherContent>
        </LearningContainer>
      </Container>
    )
  }
}

const Container = styled.div `
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #ffffff;
  padding-top: 47px;
  padding: 0;
  font-family: "Quicksand", sans-serif;
`
const LearningContainer = styled.div `
  width: 90%;
  display: flex;
  padding-top: 47px;
`
const ContentContainer = styled.div `
  overflow: auto; 
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 70%;
`

const ResourceView = styled.div `
  width: 700px;
  height: 394px;
  background-color: blue;
`
const Title = styled.div `
  width: 700px;
  margin-top: 10px;
  font-size: 26px;
  font-weight: bold;
`
const Toolbar = styled.div`
  display: flex;
  width: 700px;
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
const OtherContent = styled.div `
  height: 100%;
  width: 30%;
`
const NextResourceDivider = styled.div`
  margin-top: 10px;
  height: 1.5px;
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
