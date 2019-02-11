import React from 'react'
import TopicSelect from '../components/TopicSelect'
import styled from 'styled-components'

const ContentBrowserComponent = styled.div`
  position:relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background: #ffffff;
  /* z-index: -1; */
`
const LoboYupay = styled.img.attrs ({
  src: require('../assetsDashboard/lobo+yupay.svg'),
  alt: "Logo",
})`
  height: 300px;
  width: 300px;
  margin: 0px  200px;
  margin-top: -200px;
`
const Select = styled.div`
  width: 450px;
`

export default () => (
  <ContentBrowserComponent>
    <LoboYupay/>
    <Select>
      <TopicSelect />
    </Select>
  </ContentBrowserComponent>
)
