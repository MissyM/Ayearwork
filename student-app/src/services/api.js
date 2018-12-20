
const database = {
  topics: [
    { id: 34, name: 'Matematicas I' },
    { id: 45, name: 'Fisica' },
  ],
  resources: [
    { id: 123, topic: 34, type: 'video', name: 'My Video 1', url: '' },
    { id: 124, topic: 34, type: 'pdf', name: 'My PDF 1', url: '' },
    { id: 562, topic: 45, type: 'pdf', name: 'My PDF 2', url: '' },
    { id: 563, topic: 45, type: 'video', name: 'My Video 2', url: '' }
  ]
}

export const log = logObject => {
  console.log(logObject)
}

export const getTopics = () => Promise.resolve(database.topics)

export const getTopic = topicId => Promise.resolve(database.topics.filter(topic => topic.id === topicId)[0])

export const getResources = topicId => Promise.resolve(database.resources)

export const getResource = resourceId => Promise.resolve(database.resources.filter(res => res.id === resourceId)[0])


