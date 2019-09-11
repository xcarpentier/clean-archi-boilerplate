import {
  Action,
  ActionFunction1,
  createAction,
  handleAction,
  Reducer,
} from 'redux-actions'

export type TypedAction<Payload> = ActionFunction1<Payload, Action<Payload>>

interface AsyncTypedActions<RequestPayload, SuccessPayload, FailurePayload> {
  request: TypedAction<RequestPayload>
  success: TypedAction<SuccessPayload>
  failure: TypedAction<FailurePayload>
}

export function createTypedAction<Payload>(
  actionType: string,
): TypedAction<Payload> {
  return createAction<Payload>(actionType)
}

export function createAsyncActions<
  RequestPayload,
  SuccessPayload,
  FailurePayload = Error
>(
  actionType: string,
): AsyncTypedActions<RequestPayload, SuccessPayload, FailurePayload> {
  return {
    request: createAction<RequestPayload>(`${actionType}_REQUEST`),
    success: createAction<SuccessPayload>(`${actionType}_SUCCESS`),
    failure: createAction<FailurePayload>(`${actionType}_FAILURE`),
  }
}

interface TypedActionHandler<State, Payload> {
  action: TypedAction<Payload>
  reducer: Reducer<State, Payload>
}

export function createTypedHandler<State, Payload>(
  action: TypedAction<Payload>,
  reducer: Reducer<State, Payload>,
) {
  return {
    action,
    reducer,
  }
}

export function handleTypedAction<State, Payload>(
  handler: TypedActionHandler<State, Payload>,
  defaultState: State,
): Reducer<State, Payload> {
  return handleAction<State, Payload>(
    handler.action.toString(),
    handler.reducer,
    defaultState,
  )
}

export function handleTypedActions<State>(
  handlers: Array<TypedActionHandler<State, any>>,
  defaultState: State,
): Reducer<any, Action<any>> {
  // Create a reducer for each action handler
  const reducers: Array<Reducer<State, any>> = handlers.map(handler => {
    return handleTypedAction(handler, defaultState)
  })
  // Combine all reducers to reduce the same (state/action)
  return (state: State, action: Action<any>) => {
    return reducers.reduce((currentState, reducer) => {
      return reducer(currentState, action)
    }, state)
  }
}
