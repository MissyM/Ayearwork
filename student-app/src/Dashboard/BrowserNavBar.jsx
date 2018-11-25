import React from 'react'

import Select from 'react-select'
import { coincidenciasTemas, groupedOptions } from './Docs/data'


const groupStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}
const groupBadgeStyles = {
  backgroundColor: 'gray',
  borderRadius: '2em',
  display: 'inline-block',
  fontSize: 12,
  fontWeight: 'normal',
  lineHeight: '1',
  minWidth: 10,
  padding: '0.16666666666667em 0.5em',
  textAlign: 'center',
}

const formatGroupLabel = data => (
  <div style={groupStyles}>
    <span>{data.label}</span>
    <span style={groupBadgeStyles}>{data.options.length}</span>
  </div>
);

export default () => (
  <div className= "browserNav">
    <Select
      className="selectBrowserNavBar"
      defaultValue={coincidenciasTemas[1]}
      options={groupedOptions}
      formatGroupLabel={formatGroupLabel}
    />
  </div>
);