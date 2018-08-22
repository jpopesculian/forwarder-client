// @flow

import type { state } from '../data/state'
import type { reducer } from '../utils/reduxTypes'

import { createStore } from 'redux'
import { persistStore, persistReducer } from './persistance'
import middleware from './index'

export default (rootReducer: reducer<state>) => {
  const reducer = persistReducer(rootReducer)
  const store = createStore(reducer, middleware)
  const persistor = persistStore(store)
  return { reducer, store, persistor }
}
