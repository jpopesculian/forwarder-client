// @flow

import { combineReducers } from 'redux'
import contacts from './contacts'
import messages from './messages'
import conversations from './conversations'

export default combineReducers({
  contacts,
  messages,
  conversations
})
