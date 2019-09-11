import { createTypedAction } from '../../common/usescases/actions.helper'
export interface NavigationPayload {
  routeName: string
  params?: any
}
export const navigateTo = createTypedAction<NavigationPayload>('NAVIGATE_TO')
export const navigateBack = createTypedAction<null>('NAVIGATE_BACK')
export const popToTop = createTypedAction<null>('POP_TO_TOP')
