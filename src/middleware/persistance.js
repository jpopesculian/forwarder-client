import { createStore } from 'redux'
import {
  persistStore as persistStoreLib,
  persistReducer as persistReducerLib
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage
}

export const persistReducer = reducer =>
  persistReducerLib(persistConfig, reducer)

export const persistStore = store => persistStoreLib(store)
