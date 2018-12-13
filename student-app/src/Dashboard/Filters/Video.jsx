import React from 'react'
import styled from 'styled-components'

const Card = styled.div `
width: 520px;
height: 130px;
margin-bottom: 15px;
`
const Icon = styled.img.attrs ({
  src: require("../assetsDashboard/ic.video.png"),
  alt: "Pdf",
})`
  height: 25px;
  width: 25px;
  margin: 0px 10px;
`
const Title = styled.div `
  font-weight: bolder;
  color: #999999;
  font-size: 16.5px;
  margin-bottom: 5px;
`
const P = styled.p `
  display: flex;
  align-items: center;
  color: #999999;
  font-size: 14px;
  margin: 0px;
  padding:  0px 45px;
  justify-content: space-between;
`

export default class Video extends React.Component {
  render() {
    return (
      <Card>
        <Title><Icon/>Titulo del tema </Title>
            <P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
              nisi ut aliquip ex ea commodo consequat. 
            </P>
      </Card>
    ) 
  }
}

