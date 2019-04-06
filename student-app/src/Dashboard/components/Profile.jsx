import React, { Component } from "react"
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import SessionCtx from '../../sessionContext'

export default withRouter(class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: 'Pepe',
      showMenu: false,
    }
    this.showMenu = this.showMenu.bind(this)
    this.closeMenu = this.closeMenu.bind(this)
  }

  showMenu(e) {
    e.preventDefault()
    this.setState({showMenu: true}, () => {
      document.addEventListener('click', this.closeMenu)
    })
  }

  closeMenu() {
    this.setState({showMenu: false}, () => {
      document.removeEventListener('click', this.closeMenu)
    })
  }
  render() {
  return (
    <ProfileContent>
    <UserUnregistered username={this.state.username}/>
      <LogoUnregistered onClick={this.showMenu}>
        <Avatar/>
      </LogoUnregistered>
      {this.state.showMenu ?
        <ProfileData>
          <div>{this.username}</div>
          <Link to="/Login" style={{ textDecoration: 'none' }} >
            <Out>Salir</Out>
          </Link>
        </ProfileData>
        : null
      }
     </ProfileContent> 
    )
  }
})


const UserUnregistered = (props) => {
  return (
    <Unregistered>
      Bienvenid@ {props.username}
      <StyledLinktoRegister to = '/Register'>
           regístrate!
      </StyledLinktoRegister>
    </Unregistered>
  )
}
const ProfileContent = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  right: 0px;
  height: 200px;
  width:200px;
  padding: 10px;
  z-index: 100;
`
const LogoUnregistered= styled.div`
  position: absolute;
  top: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  margin-bottom: 5px;
  background: #00caca;
  border-radius: 50%;
`

const Unregistered= styled.div`
  width: 300px;
  height: 30px;
  right: 100px;
  top: 25px;
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
`
const Avatar = styled.img.attrs({
  src: require('../../assetsStudent/Lobo-yupay-01.svg'),
  alt: "Logo",
})`
  height: 50px;
  width:50px;
`
const ProfileData= styled.div`
  position: absolute;
  height: 50px;
  width:190px;
  padding: 5px;
  margin-top: 30px;
  background-color: white;
  box-shadow: inset 0px 0px 23px -4px rgba(199,199,245,0.33);

`
const StyledLinktoRegister= styled(Link)`
  padding: 5px;
  cursor: pointer;
`
const Out= styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  bottom: 5px;
  align-items: center;
  letter-spacing: .2em;
  background-color: #fffa65;
  height: 30px;
  width: 70px;
  text-align: center;
  margin-left: 55px;
  font-weight: bold;
  color: #000;
`