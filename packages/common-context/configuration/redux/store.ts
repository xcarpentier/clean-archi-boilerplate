import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import sagas from './sagas'
import { sagaMiddleware } from './middleware/sagaMiddleware'
import { DependenciesType } from './dependencies'

export default function createAppStore(dependencies: DependenciesType) {
  const sagasMid = sagaMiddleware(dependencies)
  const store = createStore(reducers, applyMiddleware(sagasMid))

  sagasMid.run(sagas)
  return store
}
