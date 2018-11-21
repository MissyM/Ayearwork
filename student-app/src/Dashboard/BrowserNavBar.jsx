import React, { Component } from 'react'
import Select, { components } from 'react-select'
import { colourOptions, groupedOptions } from './Docs/data.js'

const groupStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}

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
}

const formatGroupLabel = data => (
  <div style={groupStyles}>
    <span>{data.label}</span>
    <span style={groupBadgeStyles}>{data.options.length}</span>
  </div>
)
export default class extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render (){ 
    return ( 
        <div className="selectNav">
          <Select

            closeMenuOnSelect={false}
            components={{ DropdownIndicator }}
            defaultValue={[colourOptions[4], colourOptions[5]]}
            isMulti
            options={colourOptions}

            defaultValue={colourOptions[1]}
            options={groupedOptions}
            formatGroupLabel={formatGroupLabel}
          />
        </div>
    )
  }
}