import uuidv4 from 'uuid/v4'

let sessionInfo = localStorage.getItem('sessionInfo')

if (sessionInfo) {
  sessionInfo = JSON.parse(sessionInfo)
}

// export function persistSessionInfo() {
//   localStorage.setItem('sessionInfo', JSON.stringify(sessionInfo))
// }

export function createSession(userName) {
  sessionInfo = {
    userName,
    id: uuidv4(),
    timestamp: Date(Date.now())
  }
  // persistSessionInfo()
}

export const isStarted = () => !!sessionInfo
