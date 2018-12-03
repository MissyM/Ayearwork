import React from 'react'
import { Link } from 'react-router-dom'

import './stylesNavBar.css'

const  tags = [
  {ruta: 'todo', title:'Todo', color: '#18dcff', background: ' #18dcff'},
  {ruta: 'tema', title:'Tema', color: '#ff3838', background: '#ff3838'},
  {ruta: 'pdf', title:'Pdf', color: '#3ae374', background: '#3ae374'},
  {ruta: 'video', title:'Video', color: '#ff9f1a', background: '#ff9f1a'},
  {ruta: 'ppt', title:'Ppt', color: '#7158e2', background: '#7158e2'},
]

const contentTitles = {
  width: '320px',
  display: 'flex',
  justifyContent: 'space-between',
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
const buttonDiv = {
  height: '5px',
  width: '55px',
  textAlign: 'center',
  background: '#989898',
  marginRight: '10px',
  marginLeft: '10px',
}
export default class FiltersTitles extends React.Component {
  constructor(props)
  {
    super(props)
    this.state={
      path: ''
    }
  }
  render() {
    return (
      <div style={contentTitles}>
        {tags.map((obj, id) => 
            <div key={id}>
            <Link to={`/dashboard/filters/${obj.ruta}`} style={linkLabels}>
            <div style={label} >{obj.title}</div>
            { obj.ruta === this.state.path ? 
              console.log(this.state.path) ||
              <div style=
                {buttonDiv.background === obj.background}
              /> : <></>
            }
            </Link>
          </div>
        )}
      </div>
    )
  }
}