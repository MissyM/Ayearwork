import React from 'react'
import TopicSelect from '../components/TopicSelect'

import './styles.css'

export default () => (
  <div className="contentBrowserComponent">
    <img className="loboYupay" src={require('../assetsDashboard/lobo+yupay.svg')} alt="Logo"/>
    <div className='select'>
      <TopicSelect />
    </div>
  </div>
)
