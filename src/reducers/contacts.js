// @flow

import type {
  addContactsAction,
  loadContactsAction,
  allowContactsAction,
  unallowContactsAction,
  errContactsAction
} from '../actions/contacts'
import type { contactsState } from '../data/contacts'
import type { reducerMap } from '../utils/createReducer'
import {
  ERR_CONTACTS,
  ADD_CONTACTS,
  LOAD_CONTACTS,
  ALLOW_CONTACTS,
  UNALLOW_CONTACTS
} from '../types/contacts'
import createReducer from '../utils/createReducer'

const reducers: reducerMap<contactsState> = {
  [ADD_CONTACTS]: (state, action: addContactsAction) => {
    return {
      ...state,
      contacts: action.contacts,
      initialized: true,
      loading: false,
      error: null
    }
  },
  [ERR_CONTACTS]: (state, action: errContactsAction) => {
    return {
      ...state,
      error: action.error,
      initialized: true,
      loading: false
    }
  },
  [LOAD_CONTACTS]: (state, action: loadContactsAction) => {
    return {
      ...state,
      loading: true
    }
  },
  [ALLOW_CONTACTS]: (state, action: allowContactsAction) => {
    return {
      ...state,
      allowed: true
    }
  },
  [UNALLOW_CONTACTS]: (state, action: unallowContactsAction) => {
    return {
      ...state,
      allowed: false
    }
  }
}

const contactsReducer = createReducer(reducers, {
  contacts: [],
  initialized: false,
  loading: false,
  allowed: false,
  error: null
})
export default contactsReducer
