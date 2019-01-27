import React from 'react'
import styled from 'styled-components'

const Breadcrumbs = ({ segments, onClick }) => {
  return (
    <StyledBreadcrumbs>
      {segments.map((segment, idx) => (
        <React.Fragment key={idx}>
          <Segment onClick={() => (idx < segments.length - 1) && onClick(segments.slice(0, idx + 1), idx)}>{uppercaseFirst(segment)}</Segment>
          {(idx >= 0 && idx < segments.length - 1) && '/'}
        </React.Fragment>
      ))}
    </StyledBreadcrumbs>
  )
}

export default Breadcrumbs

const StyledBreadcrumbs = styled.div`
  display: flex;
  position: absolute;
  padding: 10px 0px;
  background-color: transparent; 
  font-family: Quicksand_Light, sans-serif;
  color: #9e9d9d;
`
const Segment = styled.div`
  padding: 0px 10px;
  cursor: pointer;
`

const uppercaseFirst = str => str[0].toUpperCase() + str.slice(1)
