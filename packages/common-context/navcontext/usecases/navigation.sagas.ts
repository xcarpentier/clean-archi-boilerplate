import { DependenciesType } from '../../configuration/redux/dependencies'
import { all, takeLatest } from 'redux-saga/effects'
import {
  NavigationPayload,
  navigateTo,
  navigateBack,
  popToTop,
} from './navigation.actions'
import { getDependencies } from '../../common/usescases/sagas.helper'
import { Action } from 'redux-actions'
import idx from 'idx'

function* navigateToSaga(action: Action<NavigationPayload>): any {
  const { navigationInteractor }: DependenciesType = yield getDependencies()
  const routeName = idx(action, _ => _.payload.routeName)
  const params = idx(action, _ => _.payload.params)
  if (routeName) {
    navigationInteractor.navigateTo(routeName, params)
  }
}

function* navigateBackSaga(): any {
  const { navigationInteractor }: DependenciesType = yield getDependencies()
  navigationInteractor.navigateBack()
}

function* popToTopSaga(): any {
  const { navigationInteractor }: DependenciesType = yield getDependencies()
  navigationInteractor.popToTop()
}

export const navigationSagas = function* navigationSagasFn(): any {
  yield all([
    takeLatest(navigateTo, navigateToSaga),
    takeLatest(navigateBack, navigateBackSaga),
    takeLatest(popToTop, popToTopSaga),
  ])
}
