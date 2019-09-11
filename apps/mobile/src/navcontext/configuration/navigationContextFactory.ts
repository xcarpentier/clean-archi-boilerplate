import { ENV } from '../../configuration'
import { ReactNavigationInteractor } from '../adapter/real/ReactNavigationInteractor'
import { NavigationInteractor } from '@pack/common-context/navcontext/domain/gateways/Navigation.interactor'
import { InMemoryNavigationInteractor } from '@pack/common-context/navcontext/adapter/inmemory/InMemoryNavigationInteractor'

export class NavigationContextFactory {
  static navigationInteractor(): NavigationInteractor {
    switch (ENV) {
      case 'production':
        return new ReactNavigationInteractor()
      case 'dev':
        return new ReactNavigationInteractor()

      default:
        return new InMemoryNavigationInteractor()
    }
  }
}
