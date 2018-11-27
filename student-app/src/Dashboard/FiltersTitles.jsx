import React from 'react'

import './stylesNavBar.css'

export default class FiltersTitles extends React.Component {
  render() {
    return (
      <div className="contentFilterTitles">

        <div clasname= "contentTag">
          <div className="divTitleTodo">Todo</div>
          <div className="buttonDivTodo"/>
        </div>

        <div clasname= "contentTag">
          <div className="divTitlePdf">Pdf</div>
          <div className="buttonDivPdf"></div>
        </div>
        
        <div clasname= "contentTag">
          <div className="divTitleVideo">Video</div>
          <div className="buttonDivVideo"></div>
        </div>

        <div clasname= "contentTag">
          <div className="divTitlePpt">Ppt</div>
          <div className="buttonDivPpt"></div>
        </div>

        <div clasname= "contentTag">
          <div className="divTitleTema">Tema</div>
          <div className="buttonDivTema"></div>
        </div>
        
      </div>
    )
  }
}