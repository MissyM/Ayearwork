import React from 'react'
import TopicSelect from '../components/TopicSelect'
import styled from 'styled-components'

export default () => (
  <BrowserNav>
    <TopicSelect />
  </BrowserNav>
);
const BrowserNav = styled.div`
  padding-bottom: 10px; 
  width: 405px;
`