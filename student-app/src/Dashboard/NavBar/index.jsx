import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import BrowserNavBar from './BrowserNavBar'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

export default withRouter(class extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      username: '',
    }
  }


  render (){ 
    return ( 
      <ContentGrey>
        <ContentWhite > 
          <Link to="/buscador/">
            <YupayIcon onClick={this.yupayIconClickHandler} />
          </Link>
          <ContentCenterElements>
            <BrowserNavBar />
          </ContentCenterElements>
        </ContentWhite>
        <TriangleShadowLow />
        <Link to="/Login" >
          <Out>Salir</Out>
        </Link>
       </ContentGrey>
    )
  }
})
const ContentGrey = styled.div`
  display: flex;
  position: relative;
  z-index: 10;
  background-color: #e5e5e5;
  margin-top: 0px;
  padding: 0px;
  width: 100%;
  height: 100px;
  box-shadow: 0px 5px 5px 0 rgba(0, 0, 0, 0.13);
`
const ContentWhite= styled.div`
  display: flex;
  background-color: #ffffff;
  margin-top: 0px;
  padding: 0px;
  width: 65%;
  height: 100px;
`
const ContentCenterElements= styled.div`
  padding-left: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 480px;
  height: 100px; 
`
const TriangleShadowLow= styled.div`
  width: 120px;
  background-color: white;
  transform: rotate(-70deg) translateX(0px) translateY(-1px);
  transform-origin: left bottom;
  box-shadow: 3px 5px 5px 0 rgba(0, 0, 0, 0.13);

`

const YupayIcon= styled.img.attrs({
  src: require('../assetsDashboard/yupay-azul-01.png'),
  alt:"Principal",
})`
  width: 150px;
  height: 60px;
  margin-top: 20px; 
`
const Out= styled.div`
  margin-top: 35px;
  display: flex;
  position: absolute;
  right: 60px;
  letter-spacing: .2em;
  border: 1px solid rgb(158, 157, 157);
  height: 30px;
  width: 70px;
  text-align: center;
  font-weight: bold;
  color: gray;
  border-radius: 6px;
`
