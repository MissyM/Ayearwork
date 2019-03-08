import React from "react"
import styled from 'styled-components'
import Radio from '@material-ui/core/Radio'

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

export default function Intelligences(props) {
  const { fieldChangeHandler, data } = props
  return (
    <IntelligencesContent >
        <Title>Selecciona una figura</Title>
        <GridContainer >
          {intelligences.map(({intelligence, src}, idx) => 
            <Item
              key={idx}
              onClick={()=>fieldChangeHandler("selectedIntelligence", intelligence)}
            >
              <img 
                src={src} 
                alt={intelligence}
              />
              <RadioButton 
                value={intelligence} 
                checked={data.selectedIntelligence === intelligence }
                color="default"
              />
            </Item>
          )}
        </GridContainer>
    </IntelligencesContent>
  )
}

const IntelligencesContent = styled.div`
  position: relative;
  top: 10px;
`
const Title = styled.h3`
  color: #4b4b4b;
`
const GridContainer = styled.div`
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