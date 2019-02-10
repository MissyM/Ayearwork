import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import BrowserNavBar from './BrowserNavBar'
import { Link } from 'react-router-dom'

import { logIconoPrincipalClickeado,
  logIconoYupayClickeado,
  logIconoMensajesClickeado,
  logIconoNotificacionesClickeado,
  logIconoMonedasClickeado,
} from '../../services/log'

import './styles.css'

export default withRouter(class extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      username: '',
    }
  }

  mainIconClickHandler = () => {
    logIconoPrincipalClickeado()
  }
  yupayIconClickHandler = () => {
    logIconoYupayClickeado()
  }
  messageIconClickHandler = () => {
    logIconoMensajesClickeado()
  }
  notificationIconClickHandler = () => {
    logIconoNotificacionesClickeado()
  }
  coinIconClickHandler = () => {
    logIconoMonedasClickeado()
  }
  
  render (){ 
    return ( 
      <div className="contentGrey">
        <div className="contentWhite" > 
          <Link to="/buscador/" className="linktoFilters">
            <div className="tooltipnav">
              <img className="homeIcon" onClick={this.mainIconClickHandler} src={require('../assetsDashboard/ic_home.svg')} alt="Home-Principal"/>
              <span className="tooltipnavtext">Ir al principal</span>
            </div>
          </Link>
          <Link to="/buscador/">
            <img className="yupayIcon" onClick={this.yupayIconClickHandler} src={require('../assetsDashboard/yupay-azul-01.png')} alt="Principal"/>
          </Link>
          <div className="contentCenterElements">
            { this.props.withBrowserNavBar ? <BrowserNavBar /> : <></> }
            { this.props.withFiltersContent ? <FiltersTitles/> : <></> }
          </div>
        </div>
        <div className="triangleShadowLow" />
        <div className="contentAlerts">

          <div className="tooltipAlert">
            <img className="notification" onClick={this.notificationIconClickHandler} src={require('../assetsDashboard/ic-notificacion.svg')} alt="Notificaciones"/>
            <span className="tooltipAlertText">Notificaciones</span>
          </div>

          <div className="tooltipAlert">
            <img className="mail" onClick={this.messageIconClickHandler} src={require('../assetsDashboard/ic-correo.svg')} alt="Correo"/>
            <span className="tooltipAlertText">Mensajes</span>
          </div>
          
          <div className="tooltipAlert">
            <div className="contentTokens">
              <img className="coin" onClick={this.coinIconClickHandler} src={require('../assetsDashboard/ic_competencia.svg')} alt="Moneda"/>
              <div className="textTokens" onClick={this.coinIconClickHandler}>
                <div className="tokens" onClick={this.coinIconClickHandler}>
                  Tokens
                </div>
                <div onClick={this.coinIconClickHandler}>
                  100
                </div>
              </div>
              <Link to="/Login" className="linktoLogin">
                <div className="out">Salir</div>
              </Link>
            </div>
            <span className="tooltipAlertText">Monedas</span>
          </div>
        </div>
      </div>
            
    )
  }
})
