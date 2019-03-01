import React, { Component, useCallback, useState } from "react"
import Slider from "react-slick"
import styled from 'styled-components'

import "slick-carousel/slick/slick.css" 
import "slick-carousel/slick/slick-theme.css"


const SliderContainer = styled.div`
  width: 800px;
  margin-left: 40px;
`
const StyledSlider = styled(Slider)`
  .slick-prev:before,
  .slick-next:before {
    color: grey;
  }
`

export default function MultipleItems(props) {
    console.log(props)
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5
    }
    const avatarImages= [
      {avatar:'A8', src: require('./AvatarResources/A8.png')},
      {avatar:'A9', src:  require('./AvatarResources/A9.png')},
      {avatar:'A10', src:  require('./AvatarResources/A10.png')},
      {avatar:'A11', src:  require('./AvatarResources/A11.png')},
      {avatar:'A12', src:  require('./AvatarResources/A12.png')},
      {avatar:'A13', src:  require('./AvatarResources/A13.png')},
      {avatar:'A14', src:  require('./AvatarResources/A14.png')},
      {avatar:'A15', src:  require('./AvatarResources/A15.png')},
      {avatar:'A16', src:  require('./AvatarResources/A16.png')},
      {avatar:'A17', src:  require('./AvatarResources/A17.png')},
      {avatar:'A18', src:  require('./AvatarResources/A18.png')},
      {avatar:'A19', src:  require('./AvatarResources/A19.png')},
      {avatar:'A20', src:  require('./AvatarResources/A20.png')},
      {avatar:'A21', src:  require('./AvatarResources/A21.png')},
    ]
    
    return (
      <SliderContainer>

        <StyledSlider {...settings}>
          {avatarImages.map(({avatar,src,idx}) =>
            <div  key={idx}  >
              <img 
                style={{paddingLeft:'15px'}}
                key={idx}
                src={src} 
                alt={`${avatar}`}
                onClick={props.triggerAvatarUpdate}
              />
            </div>
          )}
        </StyledSlider>
      </SliderContainer>
    );
  }