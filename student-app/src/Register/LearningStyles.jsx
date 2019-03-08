import React from "react"
import styled from 'styled-components'
import Radio from '@material-ui/core/Radio'

const learningStyles = [
  {learningStyle:'1', src: require('./assetsRegister/LearningStylesResources/1.png')},
  {learningStyle:'2', src: require('./assetsRegister/LearningStylesResources/2.png')},
  {learningStyle:'3', src: require('./assetsRegister/LearningStylesResources/3.png')},
  {learningStyle:'4', src: require('./assetsRegister/LearningStylesResources/4.png')},
  {learningStyle:'5', src: require('./assetsRegister/LearningStylesResources/5.png')},
  {learningStyle:'6', src: require('./assetsRegister/LearningStylesResources/6.png')},
  {learningStyle:'7', src: require('./assetsRegister/LearningStylesResources/7.png')},
  {learningStyle:'8', src: require('./assetsRegister/LearningStylesResources/8.png')}, 
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
              onClick={()=>fieldChangeHandler("selectedLearningStyle", learningStyle)}
            >
              <img 
                styles={{width: '200px', height:'120px'}}
                src={src} 
                alt={learningStyle}
              />
              <RadioButton 
                value={learningStyle} 
                checked={data.selectedLearningStyle === learningStyle }
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
  grid-template-columns: repeat(4, 1fr);
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