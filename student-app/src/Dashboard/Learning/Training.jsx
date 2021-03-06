import React from 'react'
import styled from 'styled-components'



export default class extends React.Component {

  render () {

    return (  
     <TrainingContainer>
      <QuestionContent>
      <Question> Aqui va la pregunta</Question>
      </QuestionContent> 
      <AnswerContent>
        <AnswerA> 3</AnswerA>
        <AnswerB> 3</AnswerB>
        <AnswerC> 3</AnswerC>
        <AnswerD> 3</AnswerD>
      </AnswerContent>
     </TrainingContainer> 
    )
  }
}
    

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
  width: 40%;
  height: 30px;
  background-color: '#3AE374';
`
const AnswerB = styled.div`
   width: 40%;
  height: 30px;
  background-color: '#7D5FFF';
`
const AnswerC = styled.div`
   width: 40%;
  height: 30px;
  background-color: '#FF4D4D';
`
const AnswerD = styled.div`
   width: 40%;
  height: 30px;
  background-color: '#FFF200';
`
