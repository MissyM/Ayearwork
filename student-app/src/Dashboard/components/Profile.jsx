import React from "react"
import styled from 'styled-components'
import { checkPropTypes } from "prop-types";

const ProfileContent = styled.div`
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
  background-color: red;
`
const AvatarContent= styled.div`
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
  background-color: white;
`
export default function Profile() {
  return (
    <ProfileContent>
      <AvatarContent>
       <Avatar/>
      </AvatarContent>
      <ProfileData>
         Bienvenido, regístrate y personaliza tu perfil!
      </ProfileData>
    </ProfileContent>  )
}
