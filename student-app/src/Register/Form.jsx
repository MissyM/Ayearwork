import React,  { useState, useCallback } from "react"
import styled from 'styled-components'
import { Formik, Field, Form } from 'formik'
import { TextField } from 'formik-material-ui'
import Carousel from './Carousel'

import { withStyles} from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import MUISelect from '@material-ui/core/Select'
import grey from '@material-ui/core/colors/grey'

import FilledInput from '@material-ui/core/FilledInput'
import MenuItem from '@material-ui/core/MenuItem'

import Select from './Select'

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
    return (
      <Formik
        initialValues={{ username: '', password: '' }}
        validate={values => {
          const errors = {}
          if (!values.username) {
            errors.username = 'Asegúrate de escribir tu nombre completo'
          }
          if (!values.password) {
            errors.password = 'Escribe una contraseña'
          }
          if (!values.age) {
            errors.age = 'Selecciona tu edad'
          }
          return errors
        }}
        onSubmit={values => {
          this.start(values)
        }}
        render={() => <>
        <FormSection>
          <Title>Registrate para que puedas personalizar tu avatar y ganar monedas</Title>
          <CardTop>
            <UpCard>
              <InputNameContent>
                <Field
                  name="username"
                  type="text"
                  label="Escribe tu Nombre Completo*"
                  style={{ width: '100%' }}
                  component={TextField}
                />
              </InputNameContent>
              <InputPasswordContent>
                <Field
                  name="password"
                  type="password"
                  label="Contraseña*"
                  component={TextField}
                />
              </InputPasswordContent>
            </UpCard>
            <LowCard>
              <Selects>
                <Field
                  name="age"
                  label="Edad*"
                  component={Select}
                  formControl={{
                    style: { marginRight: '30px' }, 
                    fullWidth: true,
                    variant: 'filled',
                    className: classes.formControl,
                  }}
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
                </Field>
                <FormControl fullWidth={true} variant="filled" className={classes.formControl}>
                  <InputLabel htmlFor="filled-gender-simple">Género</InputLabel>
                  <MUISelect
                    value={data.gender}
                    onChange={ev=>fieldChangeHandler("gender", ev)}
                    input={<FilledInput name="gender" id="filled-gender-simple" />}
                  >
                    <MenuItem value="">
                      <em>Ninguno</em>
                    </MenuItem>
                    <MenuItem value={"F"}>Femenino</MenuItem>
                    <MenuItem value={"M"}>Masculino</MenuItem>
                  </MUISelect>
                </FormControl>
                <FormControl style={{marginRight: '30px', marginLeft: '30px'}} fullWidth={true} variant="filled" className={classes.formControl}>
                  <InputLabel htmlFor="filled-grade-simple">Grado</InputLabel>
                  <MUISelect
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
                  </MUISelect>
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
      </>}
      />
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