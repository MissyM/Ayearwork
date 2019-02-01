import React from 'react'
import { withRouter } from 'react-router-dom'
import Select from 'react-select'
import { model, subtopics } from '../../model'

export const groupedOptions = [
  {
    label: 'Temas',
    options: model.topics.map(topic => ({ type: 'topic', label: topic.title, value: `option=topic&id=${topic.id}` })),
  },
  {
    label: 'Subtemas',
    options: subtopics.map(subtopic => ({ type: 'subtopic', label: subtopic.title, value: subtopic.id })),
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
    if (topic.type === 'topic') {
      this.props.history.push(`/buscador/filtros?type=all&${topic.value}`)
    } else {
      this.props.history.push(`/buscador/activities?id=${topic.value}`)
    }
  }

  render() {
    return (
      <Select
        placeholder="Buscar en Yupay"
        options={groupedOptions}
        formatGroupLabel={formatGroupLabel}
        onChange={this.handleChange}
        value={this.state.value}
      />
    )
  }
})
