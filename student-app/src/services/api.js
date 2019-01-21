import { model, subtopics, resources } from '../model'

export const log = logObject => {
  console.log(logObject)
}

/// -----

const all = [...model.topics, ...subtopics, ...resources]

export const getContent = searchString => {
  const params = new URLSearchParams(searchString)
  const type = params.get('type') || 'all'
  const option = params.get('option')
  const id = params.get('id')
  if (option === 'topic' && type === 'all') {
    const topic = model.topics.find(topic => topic.id === id)
    const result = [{ ...topic, type: 'topic' }]
    for (const subtopic of topic.subtopics) {
      result.push(...subtopic.resources)
    }
    return result
  }
  if (option === 'subtopic' && type === 'all') {
    const subtopic = subtopics.find(subtopic => subtopic.id === id)
    return subtopic.resources
  }
  if (type === 'all') {
    return [
      ...model.topics.map(topic => ({ ...topic, type: 'topic' })),
      ...resources
    ] 
  }
  if (type === 'topic') {
    return model.topics.map(topic => ({ ...topic, type: 'topic' }))
  }
  if (type === 'pdf' || type === 'video') {
    return resources.filter(resource => resource.type === type)
  }
}

export const getSubtopic = id => subtopics.find(subtopic => subtopic.id === id)
export const getResource = id => resources.find(resource => resource.id === id)//Yo agregué esto

