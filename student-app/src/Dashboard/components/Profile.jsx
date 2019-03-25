import React, { useCallback, useState } from "react"
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'


export default withRouter(function Profile() {
  const [hideData, setHideData] = useState(false)

  const handlerHideData = useCallback(() => {
    setHideData(hideData => !hideData)
 },[] )

  return (
    <ProfileContent>
        <UserUnregistered>
          <AvatarContent 
            onClick={handlerHideData}
          >
          <Avatar/>
          </AvatarContent>
          { hideData ?
            <ProfileData>
              <StyledLinktoRegister to = '/Register'>
                Bienvenido, regístrate y personaliza tu perfil!
              </StyledLinktoRegister>
              <Link to="/Login" style={{textDecoration: 'none'}} >
                <Out>Salir</Out>
              </Link>
            </ProfileData>
           : null
          }
        </UserUnregistered>
    </ProfileContent>  )
})
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
const AvatarContent= styled.div`
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

const UserUnregistered= styled.div`
  cursor: pointer;
  display: flex;
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
  height: 110px;
  width:190px;
  padding: 5px;
  margin-top: 30px;
  background-color: white;
  box-shadow: inset 0px 0px 23px -4px rgba(199,199,245,0.33);

`
const StyledLinktoRegister= styled(Link)`
  padding: 5px;
  text-decoration: none;
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