import React, {  useState, useCallback, useContext } from 'react'
import styled, { css } from 'styled-components'
import * as api from '../services/api'
import IntelligencesSection from './Intelligences'
import LearningStylesSection from './LearningStyles'
import FormSection from './Form'
import SessionContext from '../sessionContext'

const sections = {
  form: FormSection,
  intelligences: IntelligencesSection,
  learningStyles: LearningStylesSection,
}
export default function Register(props) {
 
  const [section, setSection] = useState('form')
  const [formUserData, setFormUserData] = useState({
    username: '',
    grade: '',
    gender: '',
    password:'',
    age: '',
    avatar: '',
    learningStyle: '',
    intelligence: '',
  })

  const onReady = useCallback(formData => {
    setFormUserData({
      ...formUserData,
      ...formData,
    })
    if (section === 'learningStyles' ) {
      register()
      return 
    }
    setSection(section === 'form'
      ? 'intelligences'
      : 'learningStyles'
    )
  }, [section, setSection, formUserData, setFormUserData])

  //Atrás 
  const handleGoPreviousSection = useCallback(formData => {
    setFormUserData({
      ...formUserData,
      ...formData,
    })
    setSection(section === 'intelligences' ? 'form'
      : section === 'learningStyles' ? 'intelligences' 
      : 'form' )
  }, [section, setSection, formUserData, setFormUserData])

  const goToBrowser = () => props.history.push('/buscador')

  const sessionContext = useContext(SessionContext)

  const register = useCallback(() => {
    api.register(formUserData)
      .then(res => {
        sessionContext.setSession(res.user)
        goToBrowser()
      })
      .catch(() => alert('Error de autenticación'))
  }, [formUserData])
  
  const Section = sections[section]
  
  console.log(formUserData) // <--- log del estado 

  return (
    <RegisterContent>
      <RightCloud/> 
      <CardsContent>
        <LogoContent>
          <LogoImg />
        </LogoContent>
        <Section
          onReady={onReady}
          handleGoPreviousSection={handleGoPreviousSection}
          data={formUserData}
        />
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
  height: 550px;
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