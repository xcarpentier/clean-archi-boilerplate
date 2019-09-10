import createSagaMiddleware from 'redux-saga'
import dependencies from '../dependencies'
export const sagaMiddleware = createSagaMiddleware({
  context: {
    dependencies,
  },
})
