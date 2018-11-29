import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { createSession } from './services/session'
import { log } from './services/log'

// import PropTypes from 'prop-types'
import { withStyles, createMuiTheme } from '@material-ui/core/styles'
import Input from '@material-ui/core/Input'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import grey from '@material-ui/core/colors/grey'


import './App.css'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  cssLabel: {
    '&$cssFocused': {
      color: grey[400],
    },
  },
  cssFocused: {},
  cssUnderline: {
    '&:after': {
      borderBottomColor: grey[400],
    },
  },
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: grey[400],
    },
  },
  notchedOutline: {},
})

const theme = createMuiTheme({
  typography: { useNextVariants: true },
})

export default withStyles(styles)(withRouter(class extends Component {

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
        <img className="rightCloud" src={require('./assetsStudent/nube_derecha.png')} alt="Nube derecha"/> 
        <div className="card">
          <div className="contentLogo">
            <img className="imglogo" src={require('./assetsStudent/Lobo-yupay-01.svg')} alt="Logo"/>
          </div>
          <div className="contentInput">
            <FormControl className={this.props.classes.margin}>
              <InputLabel
                htmlFor="custom-css-standard-input"
                classes={{
                  root: this.props.classes.cssLabel,
                  focused: this.props.classes.cssFocused,
                }}
              >
                Escribe tu Nombre
              </InputLabel>
              <Input
                id="custom-css-standard-input"
                value={this.state.username}
                classes={{
                  underline: this.props.classes.cssUnderline,
                }}
                onChange={this.handleUsernameChange}
              />
            </FormControl>
            <div className="btnLogin" onClick={this.start}>
              Ingresar
            </div>
          </div>
        </div>
        <img className="leftCloud" src={require('./assetsStudent/nube_izquierda.png')} alt="Nube baja"/>
      </div>
    )
  }
}))
