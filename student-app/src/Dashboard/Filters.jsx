import React, { Component } from 'react'
import './stylesFilters.css'

import Content from './Content'

const contents = [
  { type: 'pdf', topic: 'asdas' },
  { type: 'ppt', topic: 'asdas' },
  { type: 'video', topic: 'asdas' },
  { type: 'pdf', topic: 'asdas' },
  { type: 'pdf', topic: 'asdas' },
  { type: 'video', topic: 'asdas' },


]

function getContents(type) {
  return type === 'todo'
    ? contents
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
      <div className="contentFilters">
        {results.map((result, idx) => <Content key={idx} data={result} />)}
      </div>
    )
  }
}

export default Filter