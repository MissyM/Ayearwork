import React from "react"
import styled from 'styled-components'
import Radio from '@material-ui/core/Radio'

const learningStyles = [
  {learningStyle:'ESTILO ACTIVO', src: require('./assetsRegister/LearningStylesResources/estiloactivo.jpeg')},
  {learningStyle:'ESTILO PRAGMATICO', src: require('./assetsRegister/LearningStylesResources/estilopragmatico.jpeg')},
  {learningStyle:'ESTILO REFLEXIVO', src: require('./assetsRegister/LearningStylesResources/estiloreflexivo.jpeg')},
  {learningStyle:'ESTILO TEORICO', src: require('./assetsRegister/LearningStylesResources/estiloteorico.jpeg')},
]

export default function LearningStyles(props) {
  const { fieldChangeHandler, data } = props
  return (
    <LearningStylesContent >
        <Title>Selecciona una figura</Title>
        <GridContainer>
          {learningStyles.map(({learningStyle, src}, idx) => 
            <Item
              key={idx}
              onClick={()=>fieldChangeHandler("LearningStyle", learningStyle)}
            >
              <img 
                styles={{width: '200px', height:'120px'}}
                src={src} 
                alt={learningStyle}
              />
              <RadioButton 
                value={learningStyle} 
                checked={data.LearningStyle === learningStyle }
                color="default"
              />
            </Item>
          )}
        </GridContainer>
    </LearningStylesContent>
  )
}

const LearningStylesContent = styled.div`
  position: relative;
  top: 70px;
  margin-left:30px;
`
const Title = styled.h3`
  color: #4b4b4b;
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