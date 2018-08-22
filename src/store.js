// @flow

// import createStore from './middleware/createStore'
import rootReducer from './reducers'
import { createStore } from 'redux'

export const store = createStore(rootReducer)

// export const { reducer, store, persistor } = createStore(rootReducer)
