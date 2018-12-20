import React from 'react'
import styled from 'styled-components'


const Card = styled.div `
width: 520px;
height: 130px;
margin-bottom: 15px;
`
const Title = styled.div `
  font-weight: bolder;
  color: #999999;
  font-size: 16.5px;
  margin-bottom: 5px;
`
const Icon = styled.img.attrs ({
  src: require("../assetsDashboard/ic-pdf.png"),
  alt: "Pdf",
})`
  height: 25px;
  width: 25px;
  margin: 0px 10px;
`
const Description = styled.p `
  display: flex;
  align-items: center;
  color: #999999;
  font-size: 14px;
  margin: 0px;
  padding:  0px 45px;
  justify-content: space-between;
`


export default function Pdf({ data }) {
  return (
    <Card>
      <Title><Icon/>{data.title}</Title>
      <Description>{data.description}</Description>
    </Card>
  ) 
}
