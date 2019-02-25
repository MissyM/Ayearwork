import React, { Component } from 'react'
//mport { createSession } from './services/session'
import styled from 'styled-components'

import { withStyles} from '@material-ui/core/styles'
import Input from '@material-ui/core/Input'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import grey from '@material-ui/core/colors/grey'


const styles = () => ({
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
})

export default withStyles(styles)(class extends Component {

  constructor(props) {
    super(props)
    this.state = {
      userfullname: '',
      grade: '',
      gender: '',
      password:'',
      age: '',
      avatar: '',
      imtelligence: '',
      learning: '',
      error: false
    }
  }
  start =() => {
    console.log(this.state)
    if (this.state.userfullname===''){
      this.setState({
        error: true
      })
    }
  }
  handleInputUserfullnameChange= (ev) => {
    this.setState({
      userfullname : ev.target.value
    })
  }
  handleUserfullnameKeyUp= ev => {
    if (ev.keyCode === 13) {
      this.start()
    }
  }
  render () {
    return (
      <RegisterContent>
        <RightCloud/> 
        <ContentCards>
          <Motivation>Registrate para que puedas personalizar tu perfil de usuario y ganar monedas</Motivation>
          <LogoContent>
            <LogoImg />
          </LogoContent>
          <CardTop>
            <InputContent>
              <FormControl fullWidth={true}>
              <InputLabel
                htmlFor="custom-css-standard-input"
                classes={{
                  root: this.props.classes.cssLabel,
                  focused: this.props.classes.cssFocused,
                }}
              >
                Escribe tu Nombre Completo*
              </InputLabel>
              <Input
                id="custom-css-standard-input"
                error={this.state.error}
                value={this.state.userfullname}
                onChange={this.handleInputUserfullnameChange}
                classes={{
                underline: this.props.classes.cssUnderline,
                }}
                onKeyUp={this.handleUserfullnameKeyUp}
              />

            </FormControl>
            
          </InputContent>
          <InputContent>
            <FormControl fullWidth={true}>
              <InputLabel
                htmlFor="custom-css-standard-input"
                classes={{
                  root: this.props.classes.cssLabel,
                  focused: this.props.classes.cssFocused,
                }}
              >
                Escribe tu Nombre Completo + *
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
          </InputContent>
        </CardTop>
        <CardDown>
        <RegisterBtn onClick={this.handleGoNextSection}>
              Siguiente
        </RegisterBtn>
        <ContinueBtn onClick={this.start}>
            Continuar sin Registrarse
        </ContinueBtn>
        </CardDown>

      </ContentCards>
      <LeftCloud/>
    </RegisterContent>
    )
  }
})


const RegisterContent = styled.div`
  position: fixed;
  margin-top: 5%;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Motivation = styled.h3`
  color: #929292;
  margin-top: 85px;
`
const RightCloud = styled.img.attrs({
  src: require('./assetsStudent/nube_derecha.png'),
  alt:"Nube derecha",
})`
  position: absolute;
  top: -80px;
  right: 0px;
  width: 300px;
  z-index: -1;
`
const ContentCards = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 600px;
  width: 900px;
  background-color: #ffffff;
  box-shadow: 0px 10px 28px 4px #d2d2d2;
`
const CardTop = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 70%;
`
const CardDown = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 30%;
  background-color: #fff575;
`
const LogoContent = styled.div`
  position: absolute;
  top:-120px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: #00caca;
`
const LogoImg = styled.img.attrs({
  src: require("./assetsStudent/Lobo-yupay-01.svg"),
  alt:"Logo",
})`
  width: 140px;
  height: 140px;
`
const InputContent = styled.div`
  display: flex; 
  flex-direction: column;
  padding: 0px 15px;
  width: 100%;
`
const RegisterBtn = styled.div`
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
const ContinueBtn = styled.div`
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