import { NavigationInteractor } from '../../domain/gateways/Navigation.interactor'

export class InMemoryNavigationInteractor implements NavigationInteractor {
  navigateToAsync(routeName: string, params?: any): Promise<void> {
    console.log('navigateToAsync', { routeName, params })
    return Promise.resolve()
  }
  popToTop(): void {
    console.log('popToTop')
  }
  navigateTo(routeName: string, params?: any): void {
    console.log({ routeName, params })
  }
  navigateBack(): void {
    console.log('navigateBack')
  }
}
