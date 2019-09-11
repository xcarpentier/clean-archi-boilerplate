import { NavigationContainerComponent } from 'react-navigation'

let appNavigation: NavigationContainerComponent

export const setAppNavigation = (ref: NavigationContainerComponent) => {
  if (ref) {
    appNavigation = ref
  }
}

export const getAppNavigation = (): NavigationContainerComponent =>
  appNavigation
