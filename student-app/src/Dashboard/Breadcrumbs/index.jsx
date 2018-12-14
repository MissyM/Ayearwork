import React from 'react'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'
import styled from 'styled-components'


const StyledBreadcrumb = styled(Breadcrumb)`
  .breadcrumb {
  margin: 0px;
  background: rgb(252, 253, 255);
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