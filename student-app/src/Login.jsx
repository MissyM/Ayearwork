import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { createSession } from './services/session'
import { logSesionIniciada } from './services/log'
import styled from 'styled-components'

// import PropTypes from 'prop-types'
import { withStyles, createMuiTheme } from '@material-ui/core/styles'
import Input from '@material-ui/core/Input'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import grey from '@material-ui/core/colors/grey'


import './App.css'

const styles = () => ({
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
    logSesionIniciada(this.state.username)
    this.props.history.push('/buscador')
  }

  handleUsernameChange = ev => {
    this.setState({ username: ev.target.value })
  }

  handleUsernameKeyUp = ev => {
    if (ev.keyCode === 13) {
      this.start()
    }
  }

  render () {
    
    return (
      <LoginContent>
        <RightCloud/> 
        <Card>
          <LogoContent>
            <LogoImg />
          </LogoContent>
          <InputContent>
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
                onKeyUp={this.handleUsernameKeyUp}
              />
            </FormControl>
            <LoginBtn onClick={this.start}>
              Ingresa
            </LoginBtn>
            
          </InputContent>
        </Card>
        <LeftCloud/>
      </LoginContent>
    )
  }
}))


const LoginContent = styled.div`
    margin-top: 5%;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const RightCloud = styled.img.attrs({
  src: require('./assetsStudent/nube_derecha.png'),
  alt:"Nube derecha",
})`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 300px;
`
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 450px;
  width: 320px;
  background-color: #ffffff;
  box-shadow: 0px 10px 28px 4px #d2d2d2;
`
const LogoContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -90px; 
  width: 154px;
  height: 154px;
  border-radius: 50%;
  background: #00caca;
`
const LogoImg = styled.img.attrs({
  src: require("./assetsStudent/Lobo-yupay-01.svg"),
  alt:"Logo",
})`
  width: 100px;
  height: 100px;
`
const InputContent = styled.div`
   display: flex; 
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 40%;
  width: 100%;
`
const LoginBtn = styled.div`
  display: flex; 
  justify-content: center;
  align-items: center;
  width: 195px;
  height: 40px;
  margin-top: 30px;
  font-family: 'Quicksand', sans-serif;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: .2em;
  background-color: #FBED21;
` 
const LeftCloud = styled.img.attrs({
  src: require('./assetsStudent/nube_izquierda.png'),
  alt: "Nube baja",
})`
  position: absolute;
  left: 0px;
  bottom: -70px;
  width: 600px;
  height: 400px;
  z-index: -1;
`
