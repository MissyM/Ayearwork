<<<<<<< HEAD
import React,  { useState, useCallback } from 'react'
import styled from 'styled-components'

import * as api from '../services/api'


import IntelligencesSection from './Intelligences'
import LearningStylesSection from './LearningStyles'
import FormSection from './Form'

//Import { createSession } from './services/session'

const sections = {
  form: FormSection,
  intelligences: IntelligencesSection,
  learningStyles: LearningStylesSection,
}
export default function Register() {
  const [section, setSection] = useState('form')
  const [formUserData, setFormUserData] = useState({
    userName: '',
    grade: '',
    gender: '',
    password:'',
    age: '',
    name:'',
    avatar: '',
    selectedLearningStyle:'',
    selectedIntelligence:''
  })
  const fieldChangeHandler = useCallback((fieldName, ev) => {
    let value
    if (fieldName === 'avatar'){
      value = ev.target.alt
    } else if(fieldName === 'selectedLearningStyle') { 
      value = ev
    }else if(fieldName === 'selectedIntelligence') { 
      value = ev
    } else { 
      value = ev.target.value
    }
    setFormUserData( formUserData => ({
      ...formUserData,
      [fieldName]: value,
    }))
  }, [])
  
  const handleGoPreviousSection = useCallback(() => {
    setSection(section => section === 'intelligences' ? 'form'
      : section === 'learningStyles' ? 'intelligences' 
      : 'form' )
  },[])

  const handleGoNextSection = useCallback(() => {
    setSection(section => section === 'form' ? 'intelligences'
      : section === 'intelligences' ? 'learningStyles' 
      : api.register(formUserData))
  },[])
  
  const Section = sections[section]
  return (
    <RegisterContent>
      <RightCloud/> 
      <CardsContent>
        <LogoContent>
          <LogoImg />
        </LogoContent>
        <Section fieldChangeHandler={fieldChangeHandler} data={formUserData}/>
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
=======
import React,  { useState, useCallback } from 'react'
import styled from 'styled-components'

import * as api from '../services/api'


import IntelligencesSection from './Intelligences'
import LearningStylesSection from './LearningStyles'
import FormSection from './Form'

//Import { createSession } from './services/session'

const sections = {
  form: FormSection,
  intelligences: IntelligencesSection,
  learningStyles: LearningStylesSection,
}
export default function Register() {
  const [section, setSection] = useState('form')
  const [formUserData, setFormUserData] = useState({
    userName: '',
    grade: '',
    gender: '',
    password:'',
    age: '',
    name:'',
    avatar: '',
    selectedLearningStyle:'',
    selectedIntelligence:''
  })
  const fieldChangeHandler = useCallback((fieldName, ev) => {
    let value
    if (fieldName === 'avatar'){
      value = ev.target.alt
    } else if(fieldName === 'selectedLearningStyle') { 
      value = ev
    } else if(fieldName === 'selectedIntelligence') { 
      value = ev
    } else { 
      value = ev.target.value
    }
    setFormUserData({ // forma de funcion no es necesaria
      ...formUserData,
      [fieldName]: value,
    })

  }, [formUserData]) // <--- el callback depende del estado de "formUserData"
  
  const handleGoPreviousSection = useCallback(() => {
    setSection(section => section === 'intelligences' ? 'form'
      : section === 'learningStyles' ? 'intelligences' 
      : 'form' )
  },[])

  const handleGoNextSection = useCallback(() => {
    setSection(section => section === 'form' ? 'intelligences'
      : section === 'intelligences' ? 'learningStyles' 
      : register())
  },[])

  const register = useCallback(() => {
    api.register(formUserData)
      .catch(() => alert('Error de autenticación'))
  }, [formUserData])
  
  const Section = sections[section]

  console.log(formUserData) // <--- logs del estado afuera

  return (
    <RegisterContent>
      <RightCloud/> 
      <CardsContent>
        <LogoContent>
          <LogoImg />
        </LogoContent>
        <Section fieldChangeHandler={fieldChangeHandler} data={formUserData}/>
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
>>>>>>> 573b7d64d074e5714fc2653df25b4be6a762cebd
`