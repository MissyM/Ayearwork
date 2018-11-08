import * as api from './api'

/*
LogObject, types:

{
  eventName: 'SessionStarted',
  username: string,
  timestamp: number,
}
{
  eventName: 'Navigated',
  url: string,
  timestamp: number,
}

*/

export const log = logObject => {
  logObject.timestamp = Date.now()
  api.log(logObject)
}