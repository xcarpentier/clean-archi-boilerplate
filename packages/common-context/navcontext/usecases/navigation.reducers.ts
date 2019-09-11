import {
  createTypedHandler,
  handleTypedActions,
} from '../../common/usescases/actions.helper'
import { navigateTo } from './navigation.actions'

function navigateToReducer() {
  return {}
}

export const navigation = handleTypedActions(
  [createTypedHandler(navigateTo, navigateToReducer)],
  {},
)
