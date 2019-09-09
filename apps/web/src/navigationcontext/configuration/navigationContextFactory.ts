import { ENV } from '../../configuration'
// import { NavigationInteractor } from '@vitrine/common/src/navigationcontext/domain/gateways/Navigation.interactor'
import { GatsbyNavigationInteractor } from '../adapter/real/GatsbyNavigationInteractor'

export class NavigationContextFactory {
  static navigationInteractor(): any {
    switch (ENV) {
      case 'prod':
        return new GatsbyNavigationInteractor()

      default:
        return new GatsbyNavigationInteractor()
    }
  }
}
