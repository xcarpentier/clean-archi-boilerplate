import { createLogger } from 'redux-logger'

export const logger = createLogger({
  predicate: () => __DEV__,
  collapsed: true,
  logErrors: true,
  diff: true,
})
