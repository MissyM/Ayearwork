import React, { useCallback, useState } from "react"
// import SessionCtx from "./../../sessionContext"
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'


export default withRouter(function Profile() {
  // const [session] = useContext(SessionCtx)
  const [hideData, setHideData] = useState(false)
  const [isRegistered] = useState(false)

  const handlerHideData = useCallback(() => {
    setHideData(hideData => !hideData)
 },[] )

  return (
    <ProfileContent>
      {isRegistered ? 
        <UserRegistered>
           <Name > Hola {session.userName}. Bienvenido a Yupay </Name > 
        </UserRegistered> : 
        <UserUnregistered>
          <AvatarContent 
            onClick={handlerHideData}
          >
          <Avatar/>
          </AvatarContent>
          { hideData ?
            <ProfileData>
              <StyledLinktoRegister>Bienvenido, regístrate y personaliza tu perfil!</StyledLinktoRegister>
            </ProfileData>
            : null
          }
        </UserUnregistered>}
      }
    </ProfileContent>  )
})
const ProfileContent = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  top: 0px;
  right: 0px;
  height: 200px;
  width:200px;
  padding: 10px;
  z-index: 10;
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
  border-radius: 50%;
  background: #00caca;
  margin-bottom: 5px;
`
const UserRegistered= styled.div`
  position: absolute;
  top: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #00caca;
  margin-bottom: 5px;
`
const UserUnregistered= styled.div`
  position: absolute;
  top: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #00caca;
  margin-bottom: 5px;
`
const Avatar = styled.img.attrs({
  src: require('../../assetsStudent/Lobo-yupay-01.svg'),
  alt: "Logo",
})`
  height: 50px;
  width:50px;
`
const ProfileData= styled.div`
  height: 110px;
  width:190px;
  padding: 5px;
  margin-top: 30px;
  background-color: white;
`
const StyledLinktoRegister= styled(Link)`
  padding: 5px;
`
const Name= styled.p`
`