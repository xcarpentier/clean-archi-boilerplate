import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import sagas from './sagas'
import { sagaMiddleware } from './middleware/sagaMiddleware'

const createAppStore = () => {
  const store = createStore(reducers, applyMiddleware(sagaMiddleware))

  sagaMiddleware.run(sagas)
  return store
}

export default createAppStore()
