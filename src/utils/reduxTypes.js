//@flow

export type action = { type: string }
export type actionSubtype = $Subtype<action>
export type dispatcher = (actionSubtype | asyncAction) => mixed
export type asyncAction = dispatcher => mixed

export type reducer<T> = (state: T, action: actionSubtype) => T
