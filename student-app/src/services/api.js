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

export const getTopic = id => model.topics.find(topic => topic.id === id)
export const getSubtopic = id => subtopics.find(subtopic => subtopic.id === id)
export const getResource = id => resources.find(resource => resource.id === id)

export const getRelatedResources = id => {
  const selectedResource = getResource(id)
  const subtopicId = selectedResource.subtopicId
  const subtopic = getSubtopic(subtopicId)
  const resourceIdx = subtopic.resources.findIndex(r => r.id === id)
  let nextResourceIdx = resourceIdx  === (subtopic.resources.length-1) ? 0 : resourceIdx + 1
  const nextResource = subtopic.resources[nextResourceIdx] 
  let rest = allResources.filter(r =>r.id !== id && r.id !== nextResource.id )
  const resources = [
    selectedResource, 
    nextResource,
    ...rest] 
  return resources
}

