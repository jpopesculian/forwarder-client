// @flow

export type action = $Subtype<{
  type: string
}>
export type reducer = <T>(state: T, action: action) => T
export type reducerMap = {
  [string]: reducer
}

export default function createReducer(reducerMap: reducerMap): reducer {
  return <T>(state: T, action: action): T =>
    (reducerMap.hasOwnProperty(action.type)
      ? reducerMap[action.type](state, action)
      : state)
}
