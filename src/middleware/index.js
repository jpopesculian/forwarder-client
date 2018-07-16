//@flow

import { compose, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import devTools from './devTools'

export default compose(applyMiddleware(thunkMiddleware), devTools)
