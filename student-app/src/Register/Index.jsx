import React,  { useState, useCallback } from 'react'
import { withStyles} from '@material-ui/core/styles'
import styled from 'styled-components'


import IntelligencesSection from './Intelligences'
import LearningStylesSection from './LearningStyles'
import FormSection from './Form'

//Import { createSession } from './services/session'
const styles = () => ({
 
})

const sections = {
  form: FormSection,
  intelligences: IntelligencesSection,
  learningStyles: LearningStylesSection,
}
export default withStyles(styles)(function Register(props) {
  const [section, setSection] = useState('form')
  // const [selectedIntelligence, setRadioButton]= useState('interpersonal')
  
  // const handleChangeIntelligence = useCallback((event) => {
  //   setRadioButton( selectedIntelligence => selectedIntelligence = event.target.value )
  // },[])

  const handleGoPreviousSection = useCallback(() => {
    setSection(section => section === 'intelligences' ? 'form'
      : section === 'learningStyles' ? 'intelligences' 
      : console.log(props) )
      console.log(  'formulario ' )
  },[])

  const handleGoNextSection = useCallback(() => {
    setSection(section => section === 'form' ? 'intelligences'
      : section === 'intelligences' ? 'learningStyles' 
      : console.log(props) )
      console.log(  'formulario ' )
  },[])
  
    const Section = sections[section]
    return (
      <RegisterContent>
        <RightCloud/> 
        <CardsContent>
          <LogoContent>
            <LogoImg />
          </LogoContent>
          <Section styles={{ height: '600px', width: '900px'}} />
          <Bottons>
            <SkipRegisterBtn >
                Saltar Registro
            </SkipRegisterBtn>
              { (section === 'intelligences' || section === 'learningStyles') ? 
                <RegisterBtnBack onClick={handleGoPreviousSection} >
                      Volver
                </RegisterBtnBack> 
                : null
              }
            <RegisterBtn onClick={handleGoNextSection}>
                  Continuar
            </RegisterBtn>
          </Bottons>
        </CardsContent>
        <LeftCloud/>
        {/* {JSON.stringify(formUserData, null, 2)} */}
      </RegisterContent>
    )
  }
)
const RegisterContent = styled.div`
  display: flex;
  position: fixed;
  margin-top: 5%;
  height: 100%;
  width: 100%;
  justify-content: center;
`
const CardsContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 600px;
  width: 900px;
  box-shadow: 0px 10px 28px 4px #d2d2d2;
`
const RightCloud = styled.img.attrs({
  src: require('../assetsStudent/nube_derecha.png'),
  alt:"Nube derecha",
})`
  position: absolute;
  top: -80px;
  right: 0px;
  width: 300px;
  z-index: -1;
`
const LogoContent = styled.div`
  position: absolute;
  top:-60px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background: #00caca;
`
const LogoImg = styled.img.attrs({
  src: require("../assetsStudent/Lobo-yupay-01.svg"),
  alt:"Logo",
})`
  width: 110px;
  height: 110px;
`
const RegisterBtnBack = styled.div`
  display: flex; 
  justify-content: center;
  align-items: center;
  width: 205px;
  height: 50px;
  margin-top: 30px;
  font-family: 'Quicksand', sans-serif;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: .2em;
  background: #ff65bc;
  color: #000;
  transition: background-color .2s;
  border: 2px solid #ff65bc;
  &:hover{
    background-color: #fff;
    color: #000;
  }
`
const RegisterBtn = styled.div`
  display: flex; 
  justify-content: center;
  align-items: center;
  width: 205px;
  height: 50px;
  margin-top: 30px;
  font-family: 'Quicksand', sans-serif;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: .2em;
  background: #a865ff;
  color: #000;
  transition: background-color .2s;
  border: 2px solid #a865ff;
  &:hover{
    background-color: #fff;
    color: #000;
  }
`
const SkipRegisterBtn = styled.div`
  display: flex; 
  justify-content: center;
  align-items: center;
  width: 205px;
  height: 50px;
  margin-top: 30px;
  font-family: 'Quicksand', sans-serif;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: .2em;
  background: #fffa65;
  color: #000;
  transition: background-color .2s;
  border: 2px solid #fffa65;
  &:hover{
    background-color: #fff;
    color: #000;
  }
`
const Bottons = styled.div`
  display: flex;
  width: 100%;
  position: absolute;
  bottom: 15px;
  justify-content: space-around;
`
const ContinueLink = styled.a`
  display: flex; 
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  width: 205px;
  height: 50px;
  margin-top: 30px;
  font-family: 'Quicksand', sans-serif;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: .2em;
  text-align: center;
  padding: 5px;
  color:#4b4b4b;
  transition: color .2s;
  &:hover{
    color: #d2d2d2;
  }
` 
const LeftCloud = styled.img.attrs({
  src: require('../assetsStudent/nube_izquierda.png'),
  alt: "Nube baja",
})`
  position: absolute;
  left: 0px;
  bottom: -70px;
  width: 600px;
  height: 400px;
  z-index: -1;
`
const IconSkip = styled.img.attrs({
  src: require('../Dashboard/assetsDashboard/share.png')
}) `
  width: 30px;
  height: 30px;
`


