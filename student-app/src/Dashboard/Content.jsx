import React from 'react'
import Tema from './Tema'
import Pdf from './Pdf'
import Video from './Video'
import Ppt from './Ppt'


const contentComps = {
  pdf: Pdf,
  tema: Tema,
  video: Video,
  ppt: Ppt,
}

export default props => {
  const Comp = contentComps[props.data.type]
  return <Comp data={props.data}/>
}
