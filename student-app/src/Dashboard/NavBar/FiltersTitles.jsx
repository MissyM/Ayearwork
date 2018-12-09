import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import styled from 'styled-components'

const  tags = [
  {ruta: 'todo', title:'Todo', background: ' #18dcff'},
  {ruta: 'tema', title:'Tema', background: '#ff3838'},
  {ruta: 'pdf', title:'Pdf', background: '#3ae374'},
  {ruta: 'video', title:'Video', background: '#ff9f1a'},
  {ruta: 'ppt', title:'Ppt', background: '#7158e2'},
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
  width: '55px',
  textAlign: 'center',
}
const linkLabels = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  textDecoration: 'none',
  margin: '0px',
}

const ButtonDiv = styled.div`
  margin-top: 11px;
  height: 5px;
  width: 55px;
  text-align: center;
  background: ${props => props.background};
`

export default withRouter(class FiltersTitles extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div style={contentTitles}>
        {tags.map((obj, id) => 
            <div key={id}>
            <Link to={`/dashboard/filters/${obj.ruta}`} style={linkLabels}>
            <div style={label} >{obj.title}</div>
            { `/dashboard/filters/${obj.ruta}` === this.props.location.pathname 
              ? <ButtonDiv background={obj.background} />
              : <></>
            }
            </Link>
          </div>
        )}
      </div>
    )
  }
})
