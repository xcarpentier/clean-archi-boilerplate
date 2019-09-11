import { ENV } from '../../configuration'
import { GatsbyNavigationInteractor } from '../adapter/real/GatsbyNavigationInteractor'
import { NavigationInteractor } from '@pack/common-context/navcontext/domain/gateways/Navigation.interactor'

export class NavigationContextFactory {
  static navigationInteractor(): NavigationInteractor {
    switch (ENV) {
      case 'prod':
        return new GatsbyNavigationInteractor()

      default:
        return new GatsbyNavigationInteractor()
    }
  }
}
