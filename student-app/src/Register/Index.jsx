import React,  { useState, useCallback } from 'react'
import Carousel from './Carousel'

//mport { createSession } from './services/session'
import styled from 'styled-components'

import { withStyles} from '@material-ui/core/styles'
import Input from '@material-ui/core/Input'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import grey from '@material-ui/core/colors/grey'

import FilledInput from "@material-ui/core/FilledInput"
import MenuItem from "@material-ui/core/MenuItem"
import Select from "@material-ui/core/Select"

import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import classNames from 'classnames'

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
  formControl: {
    minWidth: 50
  },
  selectEmpty: {}
})

export default withStyles(styles)(function Register(props) {
  const [formUserData, setFormUserData] = useState({
    userfullname: '',
    grade: '',
    gender: '',
    password:'',
    age: '',
    name:'',
    avatar: '',
    imtelligence: '',
    learning: '',
  })
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState(false)

  const start = useCallback(() => {
    if (formUserData.userfullname===''){
      setError(true)
    }
  },[])

  const handleUserfullnameKeyUp = useCallback(ev => {
    if (ev.keyCode === 13) {
      start()
    }
  },[])
  const handleClickShowPassword = useCallback(() => {
    setShowPassword(showPassword => !showPassword)
  },[])

  const fieldChangeHandler = useCallback((fieldName, ev) => {
    let value
    console.log(ev)
    if (fieldName === 'avatar'){
      value = ev.target.alt
    } else { 
      value = ev.target.value
    }
    setFormUserData( formUserData => ({
      ...formUserData,
      [fieldName]: value,
    }))
  }, [])

  const handleGoNextSection = useCallback(() => {
    console.log(formUserData + 'formulario ')
  },[])
 
    const { classes } = props
    return (
      <RegisterContent>
        <RightCloud/> 
        <CardsContent>

          <LogoContent>
            <LogoImg />
          </LogoContent>
          <Motivation>Registrate para que puedas personalizar tu avatar y ganar monedas</Motivation>
          
          <CardTop>
            <UpCard>
              <InputNameContent>
                <FormControl  fullWidth={true} className={classNames(classes.margin, classes.textField)}>
                  {/* Input fullname */}
                  <InputLabel
                    htmlFor="custom-css-standard-input"
                    classes={{
                      root: props.classes.cssLabel,
                      focused: props.classes.cssFocused,
                    }}
                  >
                    Escribe tu Nombre Completo*
                  </InputLabel>
                  <Input
                    id="custom-css-standard-input"
                    error={error}
                    value={formUserData.userfullname}
                    onChange={ev=>fieldChangeHandler("userfullname", ev)}
                    classes={{
                      underline: props.classes.cssUnderline,
                    }}
                    onKeyUp={handleUserfullnameKeyUp}
                  />
                </FormControl>
              </InputNameContent>
              <InputPasswordContent>
                <FormControl className={classNames(classes.margin, classes.textField)}>
                  <InputLabel 
                  htmlFor="adornment-password"
                  classes={{
                    root: props.classes.cssLabel,
                    focused: props.classes.cssFocused,
                  }}
                  >
                    Contraseña
                  </InputLabel>
                  <Input
                    id="adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    value={formUserData.password}
                    onChange={ev=>fieldChangeHandler("password", ev)}
                    classes={{
                      underline: props.classes.cssUnderline,
                    }}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="Toggle password visibility"
                          onClick={handleClickShowPassword}
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>  
              </InputPasswordContent>
            </UpCard>
            <LowCard>
              <Selects >
                <FormControl style={{marginRight: '30px'}} fullWidth={true} variant="filled" className={classes.formControl}>
                  <InputLabel htmlFor="filled-age-simple">Edad</InputLabel>
                  <Select
                    value={formUserData.age}
                    onChange={ev=>fieldChangeHandler("age", ev)}
                    input={<FilledInput name="age" id="filled-age-simple" />}
                  >
                    <MenuItem value="">
                      <em>Ninguno</em>
                    </MenuItem>
                    <MenuItem value={8}>8 años</MenuItem>
                    <MenuItem value={9}>9 años</MenuItem>
                    <MenuItem value={10}>10 años</MenuItem>
                    <MenuItem value={11}>11 años</MenuItem>
                    <MenuItem value={12}>12 años</MenuItem>
                    <MenuItem value={13}>13 años</MenuItem>
                    <MenuItem value={14}>14 años</MenuItem>
                    <MenuItem value={15}>15 años</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth={true} variant="filled" className={classes.formControl}>
                  <InputLabel htmlFor="filled-gender-simple">Género</InputLabel>
                  <Select
                    value={formUserData.gender}
                    onChange={ev=>fieldChangeHandler("gender", ev)}
                    input={<FilledInput name="gender" id="filled-gender-simple" />}
                  >
                    <MenuItem value="">
                      <em>Ninguno</em>
                    </MenuItem>
                    <MenuItem value={"F"}>Femenino</MenuItem>
                    <MenuItem value={"M"}>Masculino</MenuItem>
                  </Select>
                </FormControl>
                <FormControl style={{marginRight: '30px', marginLeft: '30px'}} fullWidth={true} variant="filled" className={classes.formControl}>
                  <InputLabel htmlFor="filled-grade-simple">Grado</InputLabel>
                  <Select
                    value={formUserData.grade}
                    onChange={ev=>fieldChangeHandler("grade", ev)}
                    input={<FilledInput name="grade" id="filled-grade-simple" />}
                  >
                    <MenuItem value="">
                      <em>Ninguno</em>
                    </MenuItem>
                    <MenuItem value={6}>6to</MenuItem>
                    <MenuItem value={7}>7mo</MenuItem>
                    <MenuItem value={8}>8vo</MenuItem>
                    <MenuItem value={9}>9no</MenuItem>
                    <MenuItem value={10}>10mo</MenuItem>
                    <MenuItem value={11}>11</MenuItem>
                  </Select>
                </FormControl>
              </Selects>

            </LowCard>
          </CardTop>
          <CardBottom>
            <AvatarLabel>Selecciona tu Avatar</AvatarLabel>
            <Avatars  >
              <Carousel triggerAvatarUpdate={ev => fieldChangeHandler("avatar", ev)}/>
            </Avatars>
          </CardBottom>
          <Bottons>
            <ContinueLink onClick={start}>
              <IconNext/>
                Saltar Registro
            </ContinueLink>
            <RegisterBtn onClick={handleGoNextSection}>
                  Continuar
            </RegisterBtn>
          </Bottons>
        </CardsContent>
        <LeftCloud/>
        {JSON.stringify(formUserData, null, 2)}

      </RegisterContent>
    )
  }
)

const RegisterContent = styled.div`
 display: flex;
  position: fixed;
  margin-top: 5%;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`

const RightCloud = styled.img.attrs({
  src: require('../assetsStudent/nube_derecha.png'),
  alt:"Nube derecha",
})`
  position: absolute;
  top: -80px;
  right: 0px;
  width: 300px;
  z-index: -1;
`
const LogoContent = styled.div`
  position: absolute;
  top:-60px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background: #00caca;
`
const LogoImg = styled.img.attrs({
  src: require("../assetsStudent/Lobo-yupay-01.svg"),
  alt:"Logo",
})`
  width: 110px;
  height: 110px;
`
const Motivation = styled.h3`
  color: #4b4b4b;
  margin-top: 85px;
`

const CardsContent = styled.div`
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
  flex-direction: column;
  width: 100%;
  padding-left: 5%;
  padding-right: 5%;
`
const Selects = styled.div`
  margin-top: 40px;
  margin-left: 30px;
  margin-right: 30px;

  display: flex;
  justify-content: space-between;
`
const UpCard = styled.div`
  display: flex; 
  width: 800px;
  margin-left: 100px;
`
const InputNameContent = styled.div`
 width: 400px;
`
const InputPasswordContent = styled.div`
 width: 400px;
 margin-left: 80px;
`
const LowCard = styled.div`
  display: flex; 
  flex-direction: column;
  padding: 0px 15px;
  width: 100%;
`
const RegisterBtn = styled.div`
  display: flex; 
  justify-content: center;
  align-items: center;
  width: 205px;
  height: 50px;
  margin-top: 30px;
  font-family: 'Quicksand', sans-serif;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: .2em;
  background: #fffa65;
  color: #000;
  transition: background-color .2s;
  border: 2px solid #fffa65;
  &:hover{
    background-color: #fff;
    color: #000;
  }
  `
const CardBottom = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  height: 50%;
  color: #4b4b4b;
`
const AvatarLabel = styled.h3`
  padding-left: 50px;
  padding-top: 20px;
`
const Avatars = styled.div`
  width: 90%;
  position: absolute;
  bottom: 45px;
  height: 150px;
`
const Bottons = styled.div`
  display: flex;
  width: 100%;
  position: absolute;
  bottom: 15px;
  justify-content: space-around;
`
const ContinueLink = styled.a`
  display: flex; 
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  width: 205px;
  height: 50px;
  margin-top: 30px;
  font-family: 'Quicksand', sans-serif;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: .2em;
  text-align: center;
  padding: 5px;
  color:#4b4b4b;
  transition: color .2s;
  &:hover{
    color: #d2d2d2;
  }
` 
const LeftCloud = styled.img.attrs({
  src: require('../assetsStudent/nube_izquierda.png'),
  alt: "Nube baja",
})`
  position: absolute;
  left: 0px;
  bottom: -70px;
  width: 600px;
  height: 400px;
  z-index: -1;
`
const IconNext = styled.img.attrs({
  src: require('../Dashboard/assetsDashboard/share.png')
}) `
  width: 30px;
  height: 30px;
`


