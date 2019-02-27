import React, { Component } from "react"
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

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 3
    }
    const avatarImages= [

      require('./AvatarResources/A8.png'),
      require('./AvatarResources/A9.png'),
      require('./AvatarResources/A10.png'),
      require('./AvatarResources/A11.png'),
      require('./AvatarResources/A12.png'),
      require('./AvatarResources/A13.png'),
      require('./AvatarResources/A14.png'),
      require('./AvatarResources/A15.png'),
      require('./AvatarResources/A16.png'),
      require('./AvatarResources/A17.png'),
      require('./AvatarResources/A18.png'),
      require('./AvatarResources/A19.png'),
      require('./AvatarResources/A20.png'),
      require('./AvatarResources/A21.png'),
    ]
    return (
      <SliderContainer>
        <StyledSlider {...settings}>
          {avatarImages.map(src =>
            <div>
              <img src= {src}/>
            </div>
          )}
        </StyledSlider>
      </SliderContainer>
    );
  }
}