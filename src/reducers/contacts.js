// @flow

import type { addContactAction } from '../actions/contacts'
import type { contactsState } from '../data/contacts'
import type { reducerMap } from '../utils/createReducer'
import { ADD_CONTACTS } from '../types/contacts'
import createReducer from '../utils/createReducer'

const reducers: reducerMap<contactsState> = {
  [ADD_CONTACTS]: (state, action: addContactAction) => {
    return {
      ...state,
      contacts: action.contacts
    }
  }
}

const contactsReducer = createReducer(reducers, {
  contacts: []
})
export default contactsReducer
