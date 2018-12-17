import React from 'react'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'
import styled from 'styled-components'


const StyledBreadcrumb = styled(Breadcrumb)`
  .breadcrumb {
    position: absolute;
    top: 100px;
    margin: 0px;
    background: transparent;
  }
`

const migadepan = (props) => {
  return (
    <div>
      <StyledBreadcrumb >
        <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
        <BreadcrumbItem><a href="#">Library</a></BreadcrumbItem>
        <BreadcrumbItem active>Data</BreadcrumbItem>
      </StyledBreadcrumb>
    </div>
  )
}

export default migadepan