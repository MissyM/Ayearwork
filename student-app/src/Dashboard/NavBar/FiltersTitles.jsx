import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import styled from 'styled-components'

const  tags = [
  {route: 'all', title:'Todo', background: '#ff3838',color: '#ff3838'},
  {route: 'topic', title:'Tema', background: '#7d6bf9',color: '#7d6bf9'},
  {route: 'pdf', title:'Pdf', background: '#3ae374',color: '#3ae374'},
  {route: 'video', title:'Video', background: '#ff9f1a',color: '#ff9f1a'},
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
//  constructor(props) {
//   super(props)
//  }
  render() {
    const { search, pathname } = this.props.location
    return (
      <div style={contentTitles}>
        {tags.map((tag, id) => 
          (search.startsWith(`?type=${tag.route}`) || (search === '' && tag.route === 'todo' && pathname === '/dashboard/filters')) ? 
          <div key={id}>
            <Link to={`/dashboard/filters?type=${tag.route}`} style={linkLabels}>
              <Label style={{color: tag.color}} >{tag.title}</Label>
            </Link>
            <ButtonDiv background={tag.background} /> 
          </div>:
          <div key={id}>
            <Link to={`/dashboard/filters?type=${tag.route}`} style={linkLabels}>
              <Label>{tag.title}</Label>
            </Link>
          </div>
        )}
      </div>
    )
  }
})
