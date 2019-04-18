import React from "react"
import styled from 'styled-components'
import Radio from '@material-ui/core/Radio'
import { Formik, Field, getIn } from 'formik'

import Buttons from './Buttons'

const intelligences = [
  {intelligence:'cinetico-corporal', src: require('./assetsRegister/IntelligencesResource/cinetico.png')},
  {intelligence:'espacial', src: require('./assetsRegister/IntelligencesResource/espacial.jpg')},
  {intelligence:'logico-matematica', src: require('./assetsRegister/IntelligencesResource/matematica.png')},
  {intelligence:'musical', src: require('./assetsRegister/IntelligencesResource/musical.png')},
  {intelligence:'naturalista', src: require('./assetsRegister/IntelligencesResource/naturalista.png')},
  {intelligence:'linguistica', src: require('./assetsRegister/IntelligencesResource/linguistica.png')},
  {intelligence:'interpersonal', src: require('./assetsRegister/IntelligencesResource/interpersonal.png')},
  {intelligence:'intrapersonal', src: require('./assetsRegister/IntelligencesResource/intrapersonal.png')}, 
]

export default function Intelligences({ onReady, handleGoPreviousSection, data }) {
  return (
    <IntelligencesContent>
      <Formik
        initialValues={{ intelligence: data.intelligence }}
        validate={values => {
          const errors = {}
          if (!values.intelligence) {
            errors.intelligence = 'para poder continuar'
          }
          return errors
        }}
        onSubmit={values => {
          onReady(values)
        }}
        render={({ handleSubmit, values }) => (
          <>
            <Field
              name="intelligence"
              component={IntelligenceSelect} 
            />
            <ButtonsContainer>
              <Buttons
                section="intelligences"
                handleGoNextSection={handleSubmit}
                handleGoPreviousSection={() => handleGoPreviousSection(values)}
              />
            </ButtonsContainer>
          </>
        )}
      />
    </IntelligencesContent>
  )
}

const IntelligencesContent = styled.div`
  position: relative;
  top: 20px;
`
const Title = styled.h3`
  position: absolute;
  top: 30px;
  color: ${props => props.error ? 'red' : '#4b4b4b'};
`
const GridContainer = styled.div`
  margin-top: 35px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5px;
  grid-template-rows: 200px 210px;
`
const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: 'red';
`
const RadioButton = styled(Radio)`
  position: fixed;
  top: 60px;
  right: 25px;
`
const ButtonsContainer = styled.div`
    display: flex;
    width: 100%;
    position: absolute;
    bottom: -65px;
`

const IntelligenceSelect = ({
  field,
  form,
}) => {
  const { name } = field
  const { touched, errors, isSubmitting } = form

  const fieldError = getIn(errors, name)
  const showError = getIn(touched, name) && !!fieldError

  return (
    <>
      <Title error={showError}>Selecciona una figura{fieldError && `, ${fieldError}`}</Title>
      <GridContainer>
        {intelligences.map(({intelligence, src}, idx) =>
          <Item
            key={idx}
            onClick={() => field.onChange({ target: { name, value: intelligence } })}
          >
            <img 
              src={src} 
              alt={intelligence}
            />
            <RadioButton 
              value={intelligence} 
              checked={field.value === intelligence}
              color="default"
            />
          </Item>
        )}
      </GridContainer>
    </>
  )
}
