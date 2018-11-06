import uuidv4 from 'uuid/v4'

let sessionInfo = localStorage.getItem('sessionInfo')

if (sessionInfo) {
  sessionInfo = JSON.parse(sessionInfo)
}

export function persistSessionInfo() {
  localStorage.setItem('sessionInfo', JSON.stringify(sessionInfo))
}

export function createSession(username) {
  sessionInfo = {
    username,
    id: uuidv4(),
    timestamp: Date.now()
  }
  persistSessionInfo()
}

export const isStarted = () => !!sessionInfo
