import React from 'react'
import NavBar from '../NavBar/index'

import styled from 'styled-components'
import { allResources, getTopic, getSubtopic, getResource, getRelatedResources } from '../../services/api'
import { logIconoVisualizacionesClickeado,
  logIconoLikesClickeado,
  logIconoSubirClickeado,
  logIconoCompartirClickeado,
} from '../../services/log'
import ResourceView from './ResourceView'

export default class extends React.Component {
  state = {
    state: 'loading',
    actualResource: { title: '...' },
    nextResource:{ title: '...' },
    otherResources: [],
    topicTitle: ''
  }

  componentDidMount() {
    const search = this.props.location.search
    this.load(search)
  }

  load(search) {
    const params = new URLSearchParams(search)
    const id = params.get('id')
    const option = params.get('option')
    let resources = []
    if (option ==='topic') {
      const topic = getTopic(id)
      this.setState({topicTitle : topic.title})
      topic.subtopics.forEach(function(subtopic){
        subtopic.resources.forEach(function(resource){
          resources.push(resource)
        })
      })
    } else if (option === 'subtopic'){
      let subtopic = getSubtopic(id)
      this.setState({topicTitle : subtopic.topicTitle})
      resources = subtopic.resources
    } else if (option === 'resource'){
      let resource = getResource(id)
      resources = getRelatedResources(id)
      this.setState({topicTitle : resource.topicTitle})
    }
    if(resources.length > 0){
      this.setState({
        state: 'loaded',
        actualResource: resources[0],
        nextResource: resources[1],
      }) 
    }
    else {
      this.setState({
        state: 'noResources',
      })
    }
  }
  playResource = id => {
    this.props.history.push(`/buscador/learning?option=resource&id=${id}`)
  }


  //Logs
  visualizationsIconHandler = () => {
    logIconoVisualizacionesClickeado()
  }
  likesIconHandler = () => {
    logIconoLikesClickeado()
  }
  uploadIconHandler = () => {
    logIconoSubirClickeado()
  }
  shareIconHandler = () => {
    logIconoCompartirClickeado()
  }



  render () {
    const { actualResource, nextResource, otherResources, state, topicTitle } = this.state
    console.log(nextResource)
    return (
      state === 'noResources' ? (
        <h1>No hay recursos en este subtema</h1>
      ) : <Container>
        <NavBar />
        <LearningContainer>
          <ContentContainer>

            <ResourceView resource={actualResource} />
            <Title>{actualResource.title}</Title>
            <Subtitle>Tema:{topicTitle}</Subtitle> 

            <Toolbar>
              <View onClick={this.visualizationsIconHandler}>4 Visualizaciones</View>
              <LikeIcon onClick={this.likesIconHandler}/>
              <Label onClick={this.likesIconHandler}>10</Label>
              <UploadIcon onClick={this.uploadIconHandler}/>
              <Label onClick={this.uploadIconHandler}>Subir</Label>
              <ShareIcon onClick={this.shareIconHandler}/>
              <Label onClick={this.shareIconHandler}>Compartir</Label>
            </Toolbar>
            
          </ContentContainer>

          <OtherContent>
            <Label>Siguiente</Label>
            <PreviewContainer onClick={() => this.playResource(nextResource.id)}>
              <Preview>
                <PreviewIcon type={nextResource.type} />
              </Preview>
              <TextContent>
                <LitleTitle>{nextResource.title}</LitleTitle>
              </TextContent>
            </PreviewContainer>

            <NextResourceDivider />

            <Content>
              {otherResources.map(r => 
                <PreviewContainer key={r.id} onClick={() => this.playResource(r.id)}>
                  <Preview>
                    <PreviewIcon type={r.type} /> 
                  </Preview>
                  <TextContent>
                    <LitleTitle>{r.title}</LitleTitle>
                  </TextContent>
                </PreviewContainer>
              )}
            </Content>
          </OtherContent>
        </LearningContainer>
      </Container>
    )
  }
}

const Container = styled.div `
  width: 100%;
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

const Title = styled.div `
  width: 700px;
  margin-top: 10px;
  font-size: 26px;
  font-weight: bold;
`
const Subtitle = styled.div `
  width: 700px;
  margin-top: 10px;
  font-size: 20px;
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
const Preview = styled.div`
  height: 100px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const PreviewIcon = styled.img.attrs ({
  src: props => props.type === 'pdf'
    ? require("../assetsDashboard/ic-pdf.png")
    : require("../assetsDashboard/ic.video.png"),
  alt: props => props.type,
})`
  height: 80px;
  width: auto;
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
  cursor: pointer;
`
const Content = styled.div`
  width: 100%;
  height: 440px;
  overflow-y: scroll;
  border-bottom: 1.5px solid #d8d8e0;
  margin-right: 10px;
`
