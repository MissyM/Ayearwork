import React from 'react'

import './stylesFilters.css'

export default class Todo extends React.Component {
  render() {
    return (
      <div className="contentCardTodo">
        <div className="cardTodo">
          <div className="titleCard">Titulo del tema</div>
          <div className="metadata">
            <p>
              Aqui van metadatos de la Tarjeta del tema
            </p>
          </div>
        </div>
      </div>
    ) 
  }
}