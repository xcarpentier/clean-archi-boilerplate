import createSagaMiddleware from 'redux-saga'
import dependencies from '../dependencies'
export const sagaMiddleware = (overDependencies: { [key: string]: any }) =>
  createSagaMiddleware({
    context: {
      dependencies,
      ...overDependencies,
    },
  })
