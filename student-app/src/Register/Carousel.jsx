import React from "react"
import Slider from "react-slick"
import styled from 'styled-components'

import "slick-carousel/slick/slick.css" 
import "slick-carousel/slick/slick-theme.css"

const SliderContainer = styled.div`
  width: 700px;
  margin-left: 100px;
`
const StyledSlider = styled(Slider)`
  .slick-prev:before,
  .slick-next:before {
    color: grey;
  }
`
const Container = styled.div`
`

export default function MultipleItems(props) {
    const { fieldChangeHandler } = props
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5
    }
    const avatarImages= [
      {avatar:'A8', src: require('./assetsRegister/AvatarResources/A8.png')},
      {avatar:'A9', src:  require('./assetsRegister/AvatarResources/A9.png')},
      {avatar:'A10', src:  require('./assetsRegister/AvatarResources/A10.png')},
      {avatar:'A11', src:  require('./assetsRegister/AvatarResources/A11.png')},
      {avatar:'A12', src:  require('./assetsRegister/AvatarResources/A12.png')},
      {avatar:'A13', src:  require('./assetsRegister/AvatarResources/A13.png')},
      {avatar:'A14', src:  require('./assetsRegister/AvatarResources/A14.png')},
      {avatar:'A15', src:  require('./assetsRegister/AvatarResources/A15.png')},
      {avatar:'A16', src:  require('./assetsRegister/AvatarResources/A16.png')},
      {avatar:'A17', src:  require('./assetsRegister/AvatarResources/A17.png')},
      {avatar:'A18', src:  require('./assetsRegister/AvatarResources/A18.png')},
      {avatar:'A19', src:  require('./assetsRegister/AvatarResources/A19.png')},
      {avatar:'A20', src:  require('./assetsRegister/AvatarResources/A20.png')},
      {avatar:'A21', src:  require('./assetsRegister/AvatarResources/A21.png')},
    ]
    
    return (
      <SliderContainer>
        <StyledSlider {...settings}>
          {avatarImages.map(({avatar, src}, idx) =>
            <Container key={idx} >
              <img 
                style={{paddingLeft:'15px' , cursor: 'pointer'}}
                src={src} 
                alt={avatar}
                onClick={(ev) => fieldChangeHandler("avatar", ev)}
              />
            </Container>  
          )}
        </StyledSlider>
      </SliderContainer>
    )
  }