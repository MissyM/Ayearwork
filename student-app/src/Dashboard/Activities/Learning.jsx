import React from 'react'
import * as api from '../../services/api'

import Resource from '../../components/Resource'
import styled from 'styled-components'



export default class extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      topic: { name: '' },
      resources: [],
      selectedResource: {},
    }
  }

  componentDidMount () {
    const topicId = parseInt(this.props.match.params.topicId)
    api.getTopic(topicId)
      .then(topic => this.setState({ topic: topic ? topic : { name: 'El tema no existe' } }))
      .catch(() => alert('Error de conexión'))

    api.getResources(topicId)
      .then(resources => {
        this.setState({ resources }, () => {
          this.openResource(0)
        })
      })
      .catch(() => alert('Error de conexión'))
  }

  openResource = resourceIdx => {
    this.setState({
      selectedResource: this.state.resources[resourceIdx]
    })
  }

  render () {
    return (
      <div>
        <h1>Tema: {this.state.topic.name}</h1>
        <Resource resource={this.state.selectedResource}/>
        <ul>
          {
            this.state.resources.map(
              (resource, idx) => <li onClick={() => this.openResource(idx)}>{resource.name}</li>
            )
          }
        </ul>
      </div>
    )
  }
}
