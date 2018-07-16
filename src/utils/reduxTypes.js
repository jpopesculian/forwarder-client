//@flow

import type { state } from '../data/state'

export type action = { type: string }
export type actionSubtype = $Subtype<action>
export type dispatcher = (actionSubtype | asyncAction) => any
export type asyncAction = dispatcher => any

export type reducer<T> = (state: T, action: actionSubtype) => T

export type connectState<OwnProps, StateProps> = (
  state: state,
  ownProps: OwnProps
) => StateProps
export type connectDispatch<OwnProps, DispatchProps> = (
  dispatch: dispatcher,
  ownProps: OwnProps
) => DispatchProps
export type ContainerProps<OwnProps, StateProps, DispatchProps> = OwnProps &
  StateProps &
  DispatchProps
