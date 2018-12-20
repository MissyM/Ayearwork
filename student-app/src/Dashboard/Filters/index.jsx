import React, { Component } from 'react'
import styled from 'styled-components'

import Content from './Content'
const Container = styled.div `
  width: 100%;
  background: rgb(252, 253, 255);
`
const ContentFilters = styled.div `
  display: flex;
  flex-direction: column;
  padding-left: 125px;
  padding-top: 50px;
`
const contents = [
  { type: 'video', title: 'asdas', description: 'lorem asdasdsad' },
  { type: 'pdf', title: 'asdas', description: 'lorem asdasdsad' },
  { type: 'pdf', title: 'asdas', description: 'lorem asdasdsad' },
  { type: 'video', title: 'asdas', description: 'lorem asdasdsad' },
]
const tema = [
  { type: 'tema', title: 'asdas', description: 'lore asdasdsad' },
 { type: 'tema', title: 'asdas', description: 'lorem asdasdsad' },
  //{ type: 'tema', title: 'asdas', description: 'lore asdasdsad' },
]
function getContents(type) {
  return type === 'todo'
    ? contents 
    : type === 'tema'? tema 
    : contents.filter(content => content.type === type) 
}

class Filter extends Component {

  state = {
    results: [],
  }

  static getDerivedStateFromProps(props) {
    const results = getContents(props.match.params.type)
    return { results }
  }

  render() {
    const { results } = this.state
    return (
      <Container>
        <ContentFilters>
          {results.map((result, idx) => <Content key={idx} data={result} />)}
        </ContentFilters>
      </Container>
    )
  }
}

export default Filter