import { Middleware, Action } from 'redux'
import { createId } from '../../../common/domain/entities/createId.helper'

export type Listener = (action: Action) => void

const listeners: { [id: string]: Listener } = {}
export const addActionListener = (newListener: Listener) => {
  const listenerId = createId()
  listeners[listenerId] = newListener
  return () => delete listeners[listenerId]
}

const isAsyncAction = (action: Action) =>
  action.type.endsWith('_REQUEST') ||
  action.type.endsWith('_SUCCESS') ||
  action.type.endsWith('_FAILURE')

export const listenAsyncAction: Middleware = () => next => action => {
  try {
    if (isAsyncAction(action) && Object.keys(listeners).length > 0) {
      for (const listener of Object.values(listeners)) {
        listener(action)
      }
    }
  } catch (error) {
    console.error(error)
  }
  return next(action)
}
