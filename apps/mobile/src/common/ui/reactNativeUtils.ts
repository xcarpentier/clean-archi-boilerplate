import { InteractionManager } from 'react-native'

export const waitEndOfInteractions = (timeout: number = 5000) => {
  const waitPromise = new Promise(resolve => {
    InteractionManager.runAfterInteractions(resolve)
  })

  const hasTimeout = timeout !== null && typeof timeout !== 'undefined'
  const timeoutPromise = new Promise(resolve => {
    if (hasTimeout) {
      setTimeout(resolve, timeout)
    }
  })

  return Promise.race([waitPromise, timeoutPromise])
}
