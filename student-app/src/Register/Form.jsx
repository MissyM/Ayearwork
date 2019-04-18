import React from 'react'
import styled, { css } from 'styled-components'
import { Formik, Field, getIn } from 'formik'
import { TextField } from 'formik-material-ui'
import Carousel from './Carousel'
import Buttons from './Buttons'

import { withStyles} from '@material-ui/core/styles'
import grey from '@material-ui/core/colors/grey'

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
  const { classes, onReady, data } = props
    return (
      <Formik
        initialValues={data}
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
          if (!values.gender) {
            errors.gender = 'Selecciona tu género'
          }
          if (!values.grade) {
            errors.grade = 'Selecciona tu grado'
          }
          if (!values.avatar) {
            errors.avatar = 'para poder continuar'
          }
          return errors
        }}
        onSubmit={values => {
         onReady(values)
        }}
        render={({ handleSubmit }) => <>
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
                  <Field
                    name="gender"
                    label="Genero*"
                    component={Select}
                    formControl={{
                      fullWidth: true,
                      variant: 'filled',
                      className: classes.formControl,
                    }}
                  >
                    <MenuItem value="">
                      <em>Ninguno</em>
                    </MenuItem>
                    <MenuItem value="F">Femenino</MenuItem>
                    <MenuItem value="M">Masculino</MenuItem>
                  </Field>
                  <Field
                    name="grade"
                    label="Grado*"
                    component={Select}
                    formControl={{
                      style:{
                        marginRight: '30px',
                        marginLeft: '30px'
                      },
                      fullWidth: true,
                      variant: 'filled',
                      className: classes.formControl
                    }}
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
                  </Field>
                </Selects>
              </LowCard>
            </CardTop>
            <Field
              name="avatar"
              component={AvatarSelect}
            />
            <Buttons section="form" handleGoNextSection={handleSubmit} />
          </FormSection>
        </>}
      />
    )
  }
)

const AvatarSelect = ({
  field,
  form,
}) => {
  const { name } = field
  const { touched, errors } = form

  const fieldError = getIn(errors, name)
  const showError = getIn(touched, name) && !!fieldError

  return (
    <CardBottom>
      <AvatarLabel error={showError}>Selecciona tu Avatar{fieldError &&  `, ${fieldError}`}</AvatarLabel>
      <Avatars>
        <Carousel name={name} onChange={field.onChange} value={field.value} />
      </Avatars>
    </CardBottom>
  )
}
const Title = styled.h3`
  color: #4b4b4b;
  margin-top: 80px;
  margin-left: 150px;
`
const CardTop = styled.div`
  display: flex;
  flex-direction: column;
  width: 830px;
  padding-left: 30px;
`
const Selects = styled.div`
  margin-top: 20px;
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
  ${props => props.error && css`
    color: red;
  `}
`

const Avatars = styled.div`
  width: 90%;
  height: 150px;
`
const FormSection = styled.div`
  width: 100%;
`


