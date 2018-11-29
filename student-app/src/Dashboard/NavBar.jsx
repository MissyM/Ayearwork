import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import BrowserNavBar from './BrowserNavBar'
import { Link } from 'react-router-dom'

import "./stylesNavBar.css"
import FiltersTitles from './FiltersTitles'

export default withRouter(class extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      username: '',
    }
  }

  render (){ 
    return ( 
      <div className="contentGrey">
        <div className="contentWhite" > 
          <Link to="/dashboard/filters/todo" className="linktoFilters">
            <div className="tooltipnav">
              <img className="homeIcon" src={require('./assetsDashboard/ic_home.svg')} alt="Principal"/>
              <span className="tooltipnavtext">Ir al principal
              </span>
            </div>
          </Link>
          <img className="yupayIcon" src={require('./assetsDashboard/yupay-azul-01.png')} alt="Principal"/>
         
          <div className="contentCenterElements">
            { this.props.withBrowserNavBar ? <BrowserNavBar /> : <></> }
            { this.props.withFiltersContent ? <FiltersTitles/> : <></> }
          </div>
        </div>
        <div className="triangleShadowLow" />
        <div className="contentAlerts">
          <img className="notification" src={require('./assetsDashboard/ic-notificacion.svg')} alt="Notificaciones"/>
          <img className="mail" src={require('./assetsDashboard/ic-correo.svg')} alt="Correo"/>
          <div className="contentTokens">
            <img className="coin" src={require('./assetsDashboard/ic_competencia.svg')} alt="Moneda"/>
            <div className="textTokens">
              <div className="tokens">
                Tokens
              </div>
              <div>
                100
              </div>
            </div>
            <Link to="/Login" className="linktoLogin">
            <div className="out">Salir</div>
            </Link>
          </div>
        </div>
      </div>
            
    )
  }
})
/*TODO: Colocar iconos en la barra de navegación*/