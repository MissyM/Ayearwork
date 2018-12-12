import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import styled from 'styled-components'

const  tags = [
  {ruta: 'todo', title:'Todo', background: ' #18dcff',color: '#18dcff'},
  {ruta: 'tema', title:'Tema', background: '#ff3838',color: '#ff3838'},
  {ruta: 'pdf', title:'Pdf', background: '#3ae374',color: '#3ae374'},
  {ruta: 'video', title:'Video', background: '#ff9f1a',color: '#ff9f1a'},
 ]

const contentTitles = {
  width: '320px',
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '-16px',
}
const Label = styled.div`
  color: #989898;
  height: 100%;
  width: 55px;
  text-align: center;
  `
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
        {tags.map((tag, id) => 
          `/dashboard/filters/${tag.ruta}` === this.props.location.pathname ? 
          <div key={id}>
            <Link to={`/dashboard/filters/${tag.ruta}`} style={linkLabels}>
              <Label   style={{color: tag.color}} >{tag.title}</Label>
            </Link>
            <ButtonDiv background={tag.background} /> 
          </div>:
          <div key={id}>
            <Link to={`/dashboard/filters/${tag.ruta}`} style={linkLabels}>
              <Label  >{tag.title}</Label>
            </Link>
          </div>
        )}
      </div>
    )
  }
})
