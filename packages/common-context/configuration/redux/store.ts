import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import sagas from './sagas'
import { sagaMiddleware } from './middleware/sagaMiddleware'
import { DependenciesType } from './dependencies'
import { logger } from './middleware/logger'
import { listenAsyncAction } from './middleware/actionListener'

export default function createAppStore(
  dependencies: Partial<DependenciesType>,
) {
  const sagasMid = sagaMiddleware(dependencies)
  const store = createStore(
    reducers,
    applyMiddleware(sagasMid, logger, listenAsyncAction),
  )

  sagasMid.run(sagas)
  return store
}
