import React from 'react'
import { Link } from 'react-router-dom'

import './stylesNavBar.css'

const contentTitles = {
    width: '420px',
    display: 'flex',
    justifyContent: 'spaceBetween',
    marginBottom: '-16px',
}
const label = {
  color: '#989898',
  height: '100%',
  width: '100%',
  textAlign: 'center',
}
const linkLabels = {
  textDecoration: 'none',
  margin: '0px',
}

export default class FiltersTitles extends React.Component {
  constructor(props)
  {
    super(props)
    this.state={

    }
  }
  render() {
    return (
      <div style={contentTitles}>

        <div onclick="changeColor()">
          <Link to="/dashboard/filters/todo" style={linkLabels}>
          <div style={label} onclick="changeColor()">Todo</div>
          </Link>
          <div className="buttonDivTodo" onclick="changeColor()"/>
        </div>

        <div >
          <Link to="/dashboard/filters/pdf" styles={linkLabels}>
          <div className="divTitlePdf">Pdf</div>
          <div className="buttonDivPdf"/>
          </Link>
        </div>
        
        <div >
          <Link to="/dashboard/filters/video" styles={linkLabels}>
          <div className="divTitleVideo">Video</div>
          <div className="buttonDivVideo"/>
          </Link>
        </div>

        <div >
          <Link to="/dashboard/filters/ppt" styles={linkLabels}>
          <div className="divTitlePpt">Ppt</div>
          <div className="buttonDivPpt"/>
          </Link>
        </div>

        <div >
          <Link to="/dashboard/filters/todo" styles={linkLabels}>
          <div className="divTitleTema">Tema</div>
          <div className="buttonDivTema"/>
          </Link>
        </div>
        
      </div>
    )
  }
}