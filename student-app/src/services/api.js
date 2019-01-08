import { model, subtopics, resources } from '../model'

export const log = logObject => {
  console.log(logObject)
}

/// -----

const all = [...model.topics, ...subtopics, resources]

export const getContent = searchString => {
  const params = new URLSearchParams(searchString)
  const type = params.get('type')
  const option = params.get('option')
  const id = params.get('id')
  if (option === 'topic') {
    
  }
}
