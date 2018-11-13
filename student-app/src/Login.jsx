import React from 'react'
import { withRouter } from 'react-router-dom'
import { createSession } from './services/session'
import { log } from './services/log'

import './App.css'

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
        <div className="card">
          <div className="contentLogo">
            <img className="logo" src={require('./assetsStudent/Lobo-yupay-01.svg')} alt="Logo"/>
          </div>
          <input type="text" placeholder="Nombre" value={this.state.username} onChange={this.handleUsernameChange}/>
          <button onClick={this.start}>
            Ingresar
          </button>
        </div>
      </div>
    )
  }
})
