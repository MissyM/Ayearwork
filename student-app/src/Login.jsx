import React from 'react'
import { withRouter } from 'react-router-dom'
import { createSession } from './services/session'
import { log } from './services/log'

export default withRouter(class extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      username: '',
    }
  }

  start = () => {
    if (this.state.username === '') {
      alert('Debes escribir tu nombre')
      return
    }
    createSession(this.state.username)
    log({ eventName: 'SessionStarted', username: this.state.username })
    this.props.history.push('/dashboard')
  }

  handleUsernameChange = ev => {
    this.setState({ username: ev.target.value })
  }

  render () {
    return (
      <div className="loginContent">
        <h1>This is Login!</h1>
        <input type="text" placeholder="Nombre" value={this.state.username} onChange={this.handleUsernameChange}/>
        <button onClick={this.start}>
          Ingresar
        </button>
      </div>
    )
  }
})
