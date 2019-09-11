export interface NavigationInteractor {
  navigateTo(routeName: string, params?: any): void
  navigateToAsync(routeName: string, params?: any): Promise<void>
  navigateBack(): void
  popToTop(): void
}
