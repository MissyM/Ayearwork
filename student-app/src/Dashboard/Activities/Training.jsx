import React from 'react'
import styled from 'styled-components'

const TrainingContainer = styled.div `
  background-color: #ffffff;
  width: 100%;
  height: 100%;
`
const QuestionContent = styled.div `
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
`
const Question = styled.div `
  background-color: #0cecec;

  width: 70%;
  height: 50%;
`
const AnswerContent = styled.div `
  width: 100%;
  height: 50%;
`

const AnswerA = styled.div`
  
`

export default class extends React.Component {

  render () {

    return (  
     <TrainingContainer>
      <QuestionContent>
      <Question> Aqui va la pregunta</Question>
      </QuestionContent> 
      <AnswerContent></AnswerContent>
     </TrainingContainer> 
    )
  }
}
    