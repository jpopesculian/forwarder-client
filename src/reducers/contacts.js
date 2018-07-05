// @flow

import type { addContactAction } from '../actions/contacts'
import type { contactsState } from '../data/contacts'
import { ADD_CONTACTS } from '../types/contacts'
import createReducer from '../utils/createReducer'

const reducerMap = {
  [ADD_CONTACTS]: <contactsState>(state: contactsState, action: addContactAction): contactsState => {
    return {
      ...state,
      contacts: action.contacts
    }
  }
}

const contactsReducer = createReducer(reducerMap)
export default contactsReducer
