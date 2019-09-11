import { getAppNavigation } from '../../configuration/AppNavigationSingleton'
import {
  NavigationDispatch,
  NavigationActions,
  StackActions,
} from 'react-navigation'
import { InteractionManager } from 'react-native'
import { waitEndOfInteractions } from '../../../common/ui/reactNativeUtils'
import { NavigationInteractor } from '@pack/common-context/navcontext/domain/gateways/Navigation.interactor'

const dispatchNavigation: NavigationDispatch = action => {
  const appNavigation = getAppNavigation()
  return appNavigation.dispatch(action)
}

export class ReactNavigationInteractor implements NavigationInteractor {
  popToTop(): void {
    InteractionManager.runAfterInteractions(() => {
      dispatchNavigation(StackActions.popToTop({}))
    })
  }
  navigateTo(routeName: string, params?: any): void {
    InteractionManager.runAfterInteractions(() => {
      dispatchNavigation(
        NavigationActions.navigate({
          routeName: routeName as string,
          params,
        }),
      )
    })
  }
  async navigateToAsync(routeName: string, params?: any): Promise<void> {
    await waitEndOfInteractions()
    dispatchNavigation(
      NavigationActions.navigate({
        routeName: routeName as string,
        params,
      }),
    )
    await waitEndOfInteractions()
  }
  navigateBack(): void {
    InteractionManager.runAfterInteractions(() => {
      dispatchNavigation(NavigationActions.back())
    })
  }
}
