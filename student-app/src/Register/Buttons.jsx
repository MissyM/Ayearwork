import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

export default ({ section, handleGoPreviousSection, handleGoNextSection }) => (
  <Bottons>
    { section === 'form' &&  
      <SkipRegisterBtn to={'/Login'} >
        Saltar Registro
      </SkipRegisterBtn>
    }
    { (section === 'intelligences' || section === 'learningStyles') && 
      <RegisterBackBtn onClick={handleGoPreviousSection}>
        Volver
      </RegisterBackBtn>
    }
    <RegisterBtn 
      onClick={handleGoNextSection} 
    >
      Continuar
    </RegisterBtn>
  </Bottons>
)

const RegisterBackBtn = styled.button`
  display: flex; 
  justify-content: center;
  align-items: center;
  width: 205px;
  height: 50px;
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
const RegisterBtn = styled.button`
  display: flex; 
  justify-content: center;
  align-items: center;
  width: 205px;
  height: 50px;
  font-family: 'Quicksand', sans-serif;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: .2em;
  background: ${props => props.disabled ? '#9B9B9B' : '#a865ff'};
  color: ${props => props.disabled ? '#fff' : '#000'};;
  transition: background-color .2s;
  border: 2px solid ${props => props.disabled ? '#9B9B9B' : '#a865ff'};
  
  ${props => !props.disabled && css`
    &:hover{
      background-color: #fff;
      color: #000;
    }
  `}
`
const SkipRegisterBtn = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  display: flex; 
  justify-content: center;
  align-items: center;
  width: 205px;
  height: 50px;
  font-family: 'Quicksand', sans-serif;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: .2em;
  background-color: #fffa65;
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
  bottom: 5px;
  justify-content: space-around;
`
