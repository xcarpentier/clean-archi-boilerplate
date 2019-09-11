import { getContext, GetContextEffect } from 'redux-saga/effects'
import { DependenciesType } from '../../configuration/redux/dependencies'

type GetDependencies = GetContextEffect | DependenciesType

export function* getDependencies(): IterableIterator<GetDependencies> {
  const dependencies = yield getContext('dependencies')
  return dependencies
}
