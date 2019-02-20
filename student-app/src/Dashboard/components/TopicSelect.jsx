import React from 'react'
import { withRouter } from 'react-router-dom'
import Select, { components } from 'react-select'
import { model, subtopics, resources } from '../../model'
import styled from 'styled-components'
// No options styles
const noOptionsMessageStyles = {
  noOptionsMessage: (provided) => ({
    ...provided,
    color: 'black',
    fontWeight: 'bold'
  }),
}
//Creating Magnifiying component
const Magnifiying = styled.img.attrs({
  src: require("../assetsDashboard/buscar.png"),
  alt: "Lupa Buscar",
})`
  width: 20px;
  height: 20px;
`
const DropdownIndicator = ( props ) => {
  return (
    <components.DropdownIndicator {...props}>
      <Magnifiying />
    </components.DropdownIndicator>
  );
};

export const groupedOptions = [
  {
    label: 'Temas',
    options: model.topics.map(topic => ({ type: 'topic', label: topic.title, value: `option=topic&id=${topic.id}` })),
  },
  {
    label: 'Subtemas',
    options: subtopics.map(subtopic => ({ type: 'subtopic', label: subtopic.title, value: `option=subtopic&id=${subtopic.id }`})),
  },
  {
    label: 'Recursos',
    options: resources.map(resource => ({ type: 'resource', label: resource.title, value:  `option=resource&id=${resource.id }`})),
  },
];

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

export default withRouter(class extends React.Component {
  state = { value: '' }

  handleChange = topic => {
    this.props.history.push(`/buscador/learning?${topic.value}`)
  }
  

  render() {
    return (
      <Select
        placeholder="Buscar en Yupay"
        components={{ DropdownIndicator }}
        styles= {noOptionsMessageStyles}
        options={groupedOptions}
        noOptionsMessage={() => "No hay opciones que coincidan con tu búsqueda, inténtalo de nuevo"}
        formatGroupLabel={formatGroupLabel}
        onChange={this.handleChange}
        value={this.state.value}
      />
    )
  }
})
