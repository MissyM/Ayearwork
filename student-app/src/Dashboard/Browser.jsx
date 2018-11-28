import React from 'react'

import Select from 'react-select'
import { temas, groupedOptions } from './Docs/data'

import './stylesBrowser.css'

const groupStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};
const groupBadgeStyles = {
  backgroundColor: '#EBECF0',
  borderRadius: '2em',
  color: '#172B4D',
  display: 'inline-block',
  fontSize: 12,
  fontWeight: 'normal',
  lineHeight: '1',
  minWidth: 1,
  padding: '0.16666666666667em 0.5em',
  textAlign: 'center',
};

const formatGroupLabel = data => (
  <div style={groupStyles}>
    <span>{data.label}</span>
    <span style={groupBadgeStyles}>{data.options.length}</span>
  </div>
)

export default () => (
  <div className="contentBrowserComponent">
    <img className="loboYupay" src={require('./assetsDashboard/lobo+yupay.svg')} alt="Moneda"/>
    <div className='select'>
      <Select
        defaultValue={temas[1]}
        options={groupedOptions}
        formatGroupLabel={formatGroupLabel}
      />
    </div>
  </div>
)