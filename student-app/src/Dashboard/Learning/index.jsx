import React from 'react'
import NavBar from '../NavBar/index'
import Thumbnail from './Thumbnail'
import styled from 'styled-components'
import { getTopic, getSubtopic, getResource, getRelatedResources } from '../../services/api'
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
      this.setState({ topicTitle : topic.title })
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
        otherResources: resources.slice(2)
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
    return (
      state === 'noResources' ? (
        <h1>No hay recursos en este subtema</h1>
      ) : <Container>
        <NavBar />
        <LearningContainer>
          {/* Contenedor del recurso renderizado */}
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
          {/* ******************* */}
          <OtherContent>
            <Label>Siguiente</Label>
            <PreviewContainer onClick={() => this.playResource(nextResource.id)}>
              <Thumbnail resource= {nextResource}/>
            </PreviewContainer>

            <NextResourceDivider />

            <Content>
              {otherResources.map(r => 
                <PreviewContainer key={r.id} onClick={() => this.playResource(r.id)}>
                 <Thumbnail resource= {r}/>
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
  padding-top: 20px;
  padding: 0;
  font-family: "Quicksand", sans-serif;
`
const LearningContainer = styled.div `
  display: flex;
  padding-top: 20px;
`
//Contiene el recurso que se está renderizando y los controles
const ContentContainer = styled.div `
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`

const Title = styled.div `
  width: 70%;
  margin-top: 10px;
  font-size: 26px;
  font-weight: bold;
`
const Subtitle = styled.div `
  width: 70%;
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
`
const Toolbar = styled.div`
  display: flex;
  width: 70%;
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
  width: auto;
`
const NextResourceDivider = styled.div`
  margin-top: 10px;
  height: 1.5px;
  width: 100%;
  border-bottom: 1.5px solid #d8d8e0;
`
const PreviewContainer = styled.div`
  margin-top: 10px;
  display: flex;
  height: 150px;
  width: 100%;
  cursor: pointer;
`
const Content = styled.div`
  width: 100%;
  height: 380px;
  overflow-y: scroll;
  border-bottom: 1.5px solid #d8d8e0;
  margin-right: 10px;
`
