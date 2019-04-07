import React, { useContext } from 'react'
import { withRouter } from 'react-router-dom'
import SessionContext from './sessionContext'
import { logSesionIniciada } from './services/log'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { withStyles, createMuiTheme } from '@material-ui/core/styles'
import grey from '@material-ui/core/colors/grey'
import { Formik, Field, Form } from 'formik'
import { TextField } from 'formik-material-ui'

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

export default withStyles(styles)(withRouter(({ history }) => {

  const { setSession } = useContext(SessionContext)

  const start = ({ username }) => {
    setSession({ username })
    logSesionIniciada(username)
    history.push('/buscador')
  }

  return (
    <LoginContent>
      <RightCloud /> 
      <Card>
        <LogoContent>
          <LogoImg />
        </LogoContent>
        <InputContent>
          <Formik
            initialValues={{ username: '' }}
            validate={values => {
              const errors = {}
              if (!values.username) {
                errors.username = 'Asegúrate de escribir tu nombre'
              }
              return errors
            }}
            onSubmit={values => {
              start(values)
            }}
            render={({ submitForm }) => (
              <Form>
                <Field
                  name="username"
                  type="text"
                  label="Escribe tu nombre"
                  component={TextField}
                />
                <LoginBtn onClick={submitForm}>
                  Ingresa
                </LoginBtn>
              </Form>
            )}
          />
        </InputContent>
        <StyedLink to="/Register">
          ¡Registrate,
        </StyedLink>
        personaliza tu avatar y gana monedas!
      </Card>
      <LeftCloud/>
    </LoginContent>
  )
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
const StyedLink = styled(Link)`
  margin: 0px 20px;
  text-align: center;
`
const LoginBtn = styled.button`
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
  border: none;
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
