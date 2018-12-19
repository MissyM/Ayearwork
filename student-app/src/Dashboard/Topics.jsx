import React from 'react'
import { Link } from 'react-router-dom'
import * as api from '../services/api'

export default class extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      topics: []
    }
  }

  componentDidMount() {
    api.getTopics()
      .then(topics => this.setState({ topics }))
      .catch(() => alert('Error, no hay conexión'))
  }

  render () {
    return <div>
      <ul>
        {
          this.state.topics.map(
            topic => 
            <li>
              <Link to={`/dashboard/Activities/learning/${topic.id}`}>{topic.name}</Link>
            </li>
          )
        }
      </ul>
    </div>
  }
}