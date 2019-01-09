import React from 'react'
import Topic from './Topic'
import Pdf from './Pdf'
import Video from './Video'

const contentComps = {
  pdf: Pdf,
  topic: Topic,
  video: Video,
}

export default ({ data }) => {
  const Comp = contentComps[data.type]
  return <Comp data={data}/>
}
