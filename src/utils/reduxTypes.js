//@flow

export type action = { type: string }
export type actionSubtype = $Subtype<action>
export type dispatcher = (actionSubtype | asyncAction) => any
export type asyncAction = dispatcher => any

export type reducer<T> = (state: T, action: actionSubtype) => T
