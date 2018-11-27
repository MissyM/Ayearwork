import React, { Component } from 'react'

import './stylesFilters.css'

class Filter extends Component {
  render() {
    return (
      <div className="contentFilters">
        {/*Titulos de los filtros */}
      
        {/*Cuerpo del filtros */}
        <div className="contentBodyFilter">
        {/*Tarjetas del filtro. TODO: Hacer map */}
          <div className="contentCard">
            <div>
              <img className="formatResourceIcon" src="" alt=""/>
              <div className="card">
                <div className="titleCard">Titulo del tema</div>
                <div className="metadata">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Dolore recusandae eos sapiente debitis cumque 
                  soluta dignissimos ipsa. 
                  </p>
                </div>
                <div className="iconsContent">
                  <img  className="aprendizajeIcon" src="" alt=""/>
                  <img  className="entrenarIcon" src="" alt=""/>
                  <img  className="competirIcon" src="" alt=""/>

                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
}

export default Filter