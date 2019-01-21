import React, { Component } from 'react'
import styled from 'styled-components'
import { getContent } from '../../services/api'

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

class Filter extends Component {

  state = {
    results: [],
  }

  componentDidMount() {
    const search = this.props.location.search
    
    this.setState({
      results: getContent(search),
    })
    this.unlistenHistory = this.props.history.listen(({ search }) => {
      this.setState({
        results: getContent(search),
      })
    })
  }

  componentWillUnmount() {
    this.unlistenHistory()
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