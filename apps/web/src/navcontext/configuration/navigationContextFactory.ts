import { ENV } from '../../configuration'
import { GatsbyNavigationInteractor } from '../adapter/real/GatsbyNavigationInteractor'
import { NavigationInteractor } from '@pack/common-context/navcontext/domain/gateways/Navigation.interactor'
import { InMemoryNavigationInteractor } from '@pack/common-context/navcontext/adapter/inmemory/InMemoryNavigationInteractor'

export class NavigationContextFactory {
  static navigationInteractor(): NavigationInteractor {
    switch (ENV) {
      case 'production':
        return new GatsbyNavigationInteractor()
      case 'dev':
        return new GatsbyNavigationInteractor()

      default:
        return new InMemoryNavigationInteractor()
    }
  }
}
