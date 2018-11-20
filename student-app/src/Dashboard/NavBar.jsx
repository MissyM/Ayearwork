import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import "./styles.css"

export default withRouter(class extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      username: '',
    }
  }

  render (){ 
    return ( 
      <div className="navBackGray">
        <div className="navAvobeWhite" > 
        <div className="tooltipnav">
          <img className="home" src={require('./assetsDashboard/ic_home.svg')} alt="Principal"/>
          <span class="tooltipnavtext">Ir al principal
          </span>
        </div>
        </div>
        <div className="triangleShadowLow" />
        <div className="out">Salir</div>
      </div>
    )
  }
})
/*TODO: Colocar iconos en la barra de navegación*/