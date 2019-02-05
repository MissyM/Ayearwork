import { model, subtopics, resources } from '../model'

export const isProduction = process.env.NODE_ENV === 'production'

export const serverURL = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8080'

export const getVideo = id => `${serverURL}/api/video/${id}`

export const getPDF = id => `${serverURL}/api/pdf/${id}`

export const log = logObject => {
  fetch(`${serverURL}/api/log`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(logObject),
  })
}

/// -----

export const allResources = [...resources]

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
export const getResource = id => resources.find(resource => resource.id === id)

export const getRelatedResources = id => {
  const selectedResource = getResource(id)
  const subtopicId = selectedResource.subtopicId
  const subtopic = getSubtopic(subtopicId)
  const resourceIdx = subtopic.resources.findIndex(r => r.id === id)
  let nextResourceIdx = resourceIdx  === (subtopic.resources.length-1) ? 0 : resourceIdx + 1
  const nextResource = subtopic.resources[nextResourceIdx] 
  let rest = subtopic.resources.filter(r =>r.id !== id && r.id !== nextResource.id )
  const resources = [
    selectedResource, 
    nextResource,
    ...rest] 
  return resources
}

