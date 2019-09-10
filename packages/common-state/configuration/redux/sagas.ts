import { all } from 'redux-saga/effects'
import { SagaIterator } from 'redux-saga'

export default function* sagas(): SagaIterator {
  yield all([])
}
