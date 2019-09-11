import { navigate } from 'gatsby'
import { NavigationInteractor } from '@pack/common-context/navcontext/domain/gateways/Navigation.interactor'

export class GatsbyNavigationInteractor implements NavigationInteractor {
  navigateTo(routeName: any, params?: any): void {
    navigate(routeName, { state: params })
  }
  navigateToAsync(_routeName: string, _params?: any): Promise<void> {
    throw new Error('Method not implemented.')
  }
  navigateBack(): void {
    navigate(-1)
  }
  popToTop(): void {
    throw new Error('Method not implemented.')
  }
}
