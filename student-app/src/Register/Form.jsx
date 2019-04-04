 import React,  { useState, useCallback } from "react"
import styled from 'styled-components'
import Carousel from './Carousel'

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

export default withStyles(styles)(function Form(props) {
  const { classes, fieldChangeHandler, data} = props
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = useCallback(() => {
    setShowPassword(showPassword => !showPassword)
  },[])

    return (
      <FormSection>
        <Title>Registrate para que puedas personalizar tu avatar y ganar monedas</Title>
        <CardTop>
          <UpCard>
            <InputNameContent>
              <FormControl  
                fullWidth={true}
                className={classNames(classes.margin, classes.textField)}
              >
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
                  value={data.userName}
                  onChange={ev=>fieldChangeHandler("userName", ev)}
                  classes={{
                    underline: props.classes.cssUnderline,
                  }}
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
                  value={data.password}
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
              <FormControl 
                style={{marginRight: '30px'}} 
                fullWidth={true} variant="filled" 
                className={classes.formControl}
              >
                <InputLabel htmlFor="filled-age-simple">Edad</InputLabel>
                <Select
                  value={data.age}
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
                  value={data.gender}
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
                  value={data.grade}
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
            <Carousel fieldChangeHandler={fieldChangeHandler} />
          </Avatars>
        </CardBottom>
      </FormSection> 
    )
  }
)

const Title = styled.h3`
  color: #4b4b4b;
  margin-top: 80px;
  margin-left: 150px;
  text-align: center;
  width: 600px;
`
const CardTop = styled.div`
  display: flex;
  flex-direction: column;
  width: 830px;
  padding-left: 30px;
`
const Selects = styled.div`
  margin-top: 40px;
  margin-left: 20px;
  display: flex;
`
const UpCard = styled.div`
  display: flex; 
  width: 800px;
  margin-left: 70px;
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
  height: 150px;
`
const FormSection = styled.div`
  width: 100%;
`