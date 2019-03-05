import React, { useState, useCallback } from "react"
import styled from 'styled-components'
import Radio from '@material-ui/core/Radio'

// const styles = {
//   root: {
//     color: green[600],
//     '&$checked': {
//       color: green[500],
//     },
//   },
//   checked: {},
// };
const intelligences = [
  {intelligence:'cinetico-corporal', src: require('./assetsRegister/IntelligencesResource/cinetico.png')},
  {intelligence:'espacial', src: require('./assetsRegister/IntelligencesResource/espacial.jpg')},
  {intelligence:'logico-matematica', src: require('./assetsRegister/IntelligencesResource/matematica.png')},
  {intelligence:'musical', src: require('./assetsRegister/IntelligencesResource/musical.png')},
  {intelligence:'naturalista', src: require('./assetsRegister/IntelligencesResource/naturalista.png')},
  {intelligence:'lingusitica', src: require('./assetsRegister/IntelligencesResource/linguistica.png')},
  {intelligence:'interpersonal', src: require('./assetsRegister/IntelligencesResource/interpersonal.png')},
  {intelligence:'intrapersonal', src: require('./assetsRegister/IntelligencesResource/intrapersonal.png')}, 
]

export default function Intelligences(props) {
  const [intelligence, setIntelligence] = useState( 'espacial')
  const handleChange = useCallback((event) => {
    console.log(event)
    setIntelligence( event => ({ 
      intelligence: event.target.value,
  }))
  }, [])
  return (
    <IntelligencesContent >
        <Title>Selecciona una figura</Title>
        <GridContainer >
          {intelligences.map(({intelligence, src}, idx) => 
            <Item key={idx}>
              <img 
                styles={{width: '170px', height:'170px'}}
                src={src} 
                alt={`${intelligence}`}
                onClick={event => handleChange("intelligence", event)}
              />
              <Radio
                checked={selectedValue === intelligence}
                onChange={event => handleChange("intelligence", event)}
                value={intelligence}
                name="radio-button-demo"
                aria-label={`${intelligence}`}
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