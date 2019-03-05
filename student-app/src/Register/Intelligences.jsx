import React, { useState, useCallback } from "react"
import styled from 'styled-components'
import Radio from '@material-ui/core/Radio'
import * as api from '../services/api'


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

export default function Intelligences() {

  const [selectedValue, setSelectedValue] = useState('espacial')
  console.log(selectedValue)

  const handleOptionChange = useCallback((changeEvent) => {
    setSelectedValue(changeEvent.target.value)
    api.register(selectedValue)
  }, [])
  return (
    <IntelligencesContent >
        <Title>Selecciona una figura</Title>
        <GridContainer >
          {intelligences.map(({intelligence, src}, idx) => 
            <Item key={idx}>
              <img 
                src={src} 
                alt={intelligence}
              />
              <RadioButton 
                value={intelligence} 
                checked={selectedValue === intelligence }
                color="default"
                onChange={handleOptionChange}
              />
            </Item>
          )}
        </GridContainer>
    </IntelligencesContent>
  )
}

const IntelligencesContent = styled.div`
  position: relative;
  top: 25px;
  padding: 20px;
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