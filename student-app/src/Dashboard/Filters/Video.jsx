import React from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'

export default withRouter( class extends React.Component {

  handleActivityRoute = (id) => {
    this.props.history.push(`/buscador/activities/learning/?id=${id}&order=resource`)
  }
  render() {
    const { data } = this.props
    return (
      <Card >
        <Title onClick= {() => this.handleActivityRoute(data.id)}><Icon/>{data.title}</Title>
        <Description>{data.description}</Description>
      </Card>
    ) 
  }
})
const Card = styled.div `
width: 520px;
height: 130px;
margin-bottom: 15px;
`
const Icon = styled.img.attrs ({
  src: require("../assetsDashboard/ic.video.png"),
  alt: "Video",
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
  cursor: pointer;
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