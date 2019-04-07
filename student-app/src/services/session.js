import uuidv4 from 'uuid/v4'

export let sessionInfo = localStorage.getItem('sessionInfo')

if (sessionInfo) {
  sessionInfo = JSON.parse(sessionInfo)
}

export function persistSessionInfo() {
  localStorage.setItem('sessionInfo', JSON.stringify(sessionInfo))
}

export function createSession(info) {
  sessionInfo = info
  persistSessionInfo()
}

export function removeSession() {
  localStorage.removeItem('sessionInfo')
  sessionInfo = undefined
}

export const isStarted = () => !!sessionInfo
