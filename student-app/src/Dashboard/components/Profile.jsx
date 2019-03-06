import React, { useCallback, useState } from "react"
import styled from 'styled-components'
import { checkPropTypes } from "prop-types";

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
  background-color: red;
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
export default function Profile() {
  const [hideData, setHideData] = useState(false)
  const handlerHideData = useCallback(() => {
    setHideData(hideData => !hideData)
 },[] )

  return (
    <ProfileContent>
      <AvatarContent 
        onClick={handlerHideData}
      >
       <Avatar/>
      </AvatarContent>
      { hideData ?
        <ProfileData>
          Bienvenido, regístrate y personaliza tu perfil!
        </ProfileData>
        : null
      }
    </ProfileContent>  )
}
