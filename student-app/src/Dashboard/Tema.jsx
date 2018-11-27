import React from 'react'

import './stylesFilters.css'

export default class Tema extends React.Component {
  render() {
    return (
      <div>
        {/*TODO hacer un map para meter los temas en la siguiente tarjetica*/}
        <div className="contentCard">
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
    ) 
  }
}
