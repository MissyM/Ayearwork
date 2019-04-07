import React from "react"
import Slider from "react-slick"
import styled from 'styled-components'

import avatarImages from '../model/avatars'

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
  outline: none;
`

export default function MultipleItems({ name, onChange, value }) {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5
    }

    return (
      <SliderContainer>
        <StyledSlider {...settings}>
          {avatarImages.map(({ avatar, src }, idx) =>
            <Container key={idx}>
              <img
                style={{ paddingLeft:'7px' , cursor: 'pointer' }}
                src={src} 
                alt={avatar}
                onClick={() => onChange({ target: { name, value: avatar } })}
                style={avatar === value ? {
                  border: '2px solid blue',
                  borderRadius: 5,
                } : {
                  border: '2px solid transparent',
                }}
              />
            </Container>  
          )}
        </StyledSlider>
      </SliderContainer>
    )
  }