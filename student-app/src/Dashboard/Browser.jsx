import React from 'react'
import chroma from 'chroma-js'

import { coincidenciasTemas } from './Docs/data'
import Select from 'react-select'
import './stylesBrowser.css'

const dot = (color = '#ccc') => ({
  alignItems: 'center',
  display: 'flex',

  ':before': {
    backgroundColor: color,
    borderRadius: 10,
    content: ' ',
    display: 'block',
    marginRight: 8,
    height: 10,
    width: 10,
  },
})

const colourStyles = {
  control: styles => ({ ...styles, backgroundColor: 'white' }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color)
    return {
      ...styles,
      backgroundColor: isDisabled
        ? null
        : isSelected ? data.color : isFocused ? color.alpha(0.1).css() : null,
      color: isDisabled
        ? '#ccc'
        : isSelected
          ? chroma.contrast(color, 'white') > 2 ? 'white' : 'black'
          : data.color,
      cursor: isDisabled ? 'not-allowed' : 'default',
    }
  },
  input: styles => ({ ...styles, ...dot() }),
  placeholder: styles => ({ ...styles, ...dot() }),
  singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
}

export default () => (
  <div className="contentBrowserComponent">
    <img className="loboYupay" src={require('./assetsDashboard/lobo+yupay.svg')} alt="Moneda"/>
    <div className='select'>
    <Select
      
      defaultValue={coincidenciasTemas[2]}
      label="Single select"
      options={coincidenciasTemas}
      styles={colourStyles}
    />
    </div>
  </div>
)