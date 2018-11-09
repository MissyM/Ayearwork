import React from 'react'
import { Link } from 'react-router-dom'

import './styles'

export default ({ match }) => (
  <div className="containerMain">
    <h1 className="welcome">¡Hola Ana Isabel!</h1>
    <p className= "">bla, bla, bla</p>
    <div className="">
      <div className="left">
        <Link to="/dashboard/topics">
          <div className="aprender">
            
          </div>
        </Link>
      </div>
      <div className="right">

      </div>
    </div>
  </div>
)