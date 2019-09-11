import { all } from 'redux-saga/effects'
import { SagaIterator } from 'redux-saga'
import { navigationSagas } from '../../navcontext/usecases/navigation.sagas'

export default function* sagas(): SagaIterator {
  yield all([navigationSagas()])
}
