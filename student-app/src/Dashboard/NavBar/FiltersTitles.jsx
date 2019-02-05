import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import styled from 'styled-components'

import { logTagTodoClickeado,
  logTagPDFClickeado,
  logTagVideoClickeado,
  logTagTemaClickeado,
} from '../../services/log'

const  tags = [
  {route: 'all', title:'Todo', background: '#ff3838',color: '#ff3838'},
  {route: 'topic', title:'Tema', background: '#7d6bf9',color: '#7d6bf9'},
  {route: 'pdf', title:'Pdf', background: '#3ae374',color: '#3ae374'},
  {route: 'video', title:'Video', background: '#ff9f1a',color: '#ff9f1a'},
 ]


const ContentTitles = styled.div`
  width: 320px;
  display: flex;
  justify-content: space-between;
  margin-bottom: -16px;
  `
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
clickHandler = (title) => {
 if(title === 'Todo'){
   logTagTodoClickeado()
 } else if(title ==='Tema') {
   logTagTemaClickeado()
 }else if(title ==='Pdf') {
   logTagPDFClickeado()
 }else if(title ==='Video') 
   logTagVideoClickeado()
}

  render() {
    const { search, pathname } = this.props.location
    return (
      <ContentTitles>
        {tags.map((tag, id) => 
          (search.startsWith(`?type=${tag.route}`) || (search === '' && tag.route === 'all' && pathname === '/buscador/filtros'))
          ? <div key={id} onClick={() => this.clickHandler(tag.title)}>
            <Link to={`/buscador/filtros?type=${tag.route}`} style={linkLabels}>
              <Label style={{color: tag.color}} >{tag.title}</Label>
            </Link>
            <ButtonDiv background={tag.background} /> 
          </div>
          : <div key={id}>
            <Link to={`/buscador/filtros?type=${tag.route}`} style={linkLabels}>
              <Label onClick={() => this.clickHandler(tag.title)}>{tag.title}</Label>
            </Link>
          </div>
        )}
      </ContentTitles>
    )
  }
})
