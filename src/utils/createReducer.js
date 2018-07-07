// @flow

export type action = $Subtype<{
  type: string
}>
export type reducer<T> = (state: T, action: action) => T
export type reducerMap<T> = {
  [string]: reducer<T>
}

export default function createReducer<T>(
  reducerMap: reducerMap<T>,
  defaultState: T
): reducer<T> {
  return (state: T, action: action): T => {
    if (reducerMap.hasOwnProperty(action.type)) {
      return reducerMap[action.type](state, action)
    } else if (typeof state == 'undefined') {
      return defaultState
    } else {
      return state
    }
  }
}
