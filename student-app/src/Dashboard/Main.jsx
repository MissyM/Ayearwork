import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

export default () => (
  <div className="containerMain">
    <div className="welcome">
    <h1 >¡Hola Juan!</h1>
    <p>bla, bla, bla</p>
    </div>
    <div className="contentLinks">
      <div className="leftDiv">
        <Link to="/dashboard/topics" className="link">
          <div className="learning">
            <h2>Aprendizaje</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, repellendus at. </p>
          </div>
        </Link>
      </div>
      <div className="rightDiv">
        <div className="highRightDiv">
          <h2 className="link">Entrenamiento</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, repellendus at. </p>
        </div>
        <div className="lowRightDiv">
          <h2 className="link">Competencia</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, repellendus at. </p>

        </div>

      </div>
    </div>
  </div>
)