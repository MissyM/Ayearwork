import React from 'react'
import styled from 'styled-components'

//PlayIcon es la imagen play
const PlayIcon = styled.img.attrs(({ type }) => ({
  src: type === 'pdf' ? require('../assetsDashboard/ic-pdf.png') : require('../../assetsStudent/images/play.png'),
}))`
  position: absolute;
  top: calc(50% - 25px);
  left: calc(50% - 15px);
  width: 30px;
  height:30px;
`
const ContentThumbnail = styled.div`
  position: relative;
  width: 250px;
  height:200px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  ${PlayIcon} {
    opacity: 0;
    transform: scale(0.5);
    transition: all .20s;
  }
  figcaption {
    transform: translateY(0);
    opacity: 1;
    transition: all .20s;
  }
  &:hover {
    figcaption {
      opacity: 0;
      transform: translateY(50%);
    }
    ${PlayIcon} {
      opacity: 1;
      transform: scale(1);
    }
  }
`

// Este link es el recurso
const StyledLink = styled.a`
  outline: none;
`
//Thubnail es la imagen miniatura
const Thumbnail= styled.img.attrs({
  src: require('../../assetsStudent/images/SISTEMA DE NUMERACION-1.png')
})`
  cursor: pointer;
  width: 100%;
`

const ResourceTitle = styled.figcaption`
  position: absolute;
  width: 80%;
  height: 10%;
  bottom: 0;
  font-size: 16px;
  padding: 10%;
  background: rgba(0,0,0,0.6);
  color: #fff;
`
export default ({href, title, src, type})=> {
  return <ContentThumbnail>
    <StyledLink>
        <Thumbnail />
        <PlayIcon type={'video'} /> 
        <ResourceTitle>Aqui va el título del recurso</ResourceTitle> 
    </StyledLink>
  </ContentThumbnail>
}
