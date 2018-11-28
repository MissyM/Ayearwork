import React from 'react'
import { Link } from 'react-router-dom'

import './stylesNavBar.css'

export default class FiltersTitles extends React.Component {
  render() {
    return (
      <div className="contentFilterTitles">

        <div clasname= "contentTag">
          <Link to="/dashboard/filters/todo" className="linksToOfFilters">
          <div className="divTitleTodo">Todo</div>
          </Link>
          <div className="buttonDivTodo"/>
        </div>

        <div clasname= "contentTag">
          <Link to="/dashboard/filters/pdf" className="linksToOfFilters">
          <div className="divTitlePdf">Pdf</div>
          <div className="buttonDivPdf"/>
          </Link>
        </div>
        
        <div clasname= "contentTag">
          <Link to="/dashboard/filters/video" className="linksToOfFilters">
          <div className="divTitleVideo">Video</div>
          <div className="buttonDivVideo"/>
          </Link>
        </div>

        <div clasname= "contentTag">
          <Link to="/dashboard/filters/ppt" className="linksToOfFilters">
          <div className="divTitlePpt">Ppt</div>
          <div className="buttonDivPpt"/>
          </Link>
        </div>

        <div clasname= "contentTag">
          <Link to="/dashboard/filters/todo" className="linksToOfFilters">
          <div className="divTitleTema">Tema</div>
          <div className="buttonDivTema"/>
          </Link>
        </div>
        
      </div>
    )
  }
}