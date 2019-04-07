import React from "react"
import styled from 'styled-components'
import Radio from '@material-ui/core/Radio'
import { Formik, Field, getIn } from 'formik'

import Buttons from './Buttons'

const learningStyles = [
  { learningStyle:'ESTILO ACTIVO', src: require('./assetsRegister/LearningStylesResources/estiloactivo.jpeg') },
  { learningStyle:'ESTILO PRAGMATICO', src: require('./assetsRegister/LearningStylesResources/estilopragmatico.jpeg') },
  { learningStyle:'ESTILO REFLEXIVO', src: require('./assetsRegister/LearningStylesResources/estiloreflexivo.jpeg') },
  { learningStyle:'ESTILO TEORICO', src: require('./assetsRegister/LearningStylesResources/estiloteorico.jpeg') },
]

export default function LearningStyles({ onReady }) {
  return (
    <LearningStylesContent>
      <Formik
        initialValues={{ learningStyle: '' }}
        validate={values => {
          const errors = {}
          if (!values.learningStyle) {
            errors.learningStyle = 'selecciona una opcion'
          }
          return errors
        }}
        onSubmit={values => {
          onReady(values)
        }}
        render={({ handleSubmit }) => (
          <>
            <Field
              name="learningStyle"
              component={LearningStylesSelect}
            />
            <Buttons section="learningStyles" handleGoNextSection={handleSubmit} />
          </>
        )}
      />
    </LearningStylesContent>
  )
}

const LearningStylesContent = styled.div`
  position: relative;
  top: 70px;
  margin-left:30px;
`
const Title = styled.h3`
  color: ${props => props.error ? 'red' : '#4b4b4b'};
`
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2px;
  grid-template-rows: 150px 120px;
`
const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: 'red';
`
const RadioButton = styled(Radio)`
  position: fixed;
  top: 65px;
  right: 18px;
`

const LearningStylesSelect = ({
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
        {learningStyles.map(({learningStyle, src}, idx) => 
          <Item
            key={idx}
            onClick={() => field.onChange({ target: { name, value: learningStyle } })}
          >
            <img 
              styles={{width: '200px', height:'120px'}}
              src={src} 
              alt={learningStyle}
            />
            <RadioButton 
              value={learningStyle} 
              checked={field.value === learningStyle }
              color="default"
            />
          </Item>
        )}
      </GridContainer>
    </>
  )
}
