// @flow

import type {
  addContactsAction,
  loadContactsAction,
  allowContactsAction,
  unallowContactsAction,
  errContactsAction,
  searchContactsAction
} from '../actions/contacts'
import type { contactsState } from '../data/contacts'
import type { reducerMap } from '../utils/createReducer'
import {
  ERR_CONTACTS,
  ADD_CONTACTS,
  LOAD_CONTACTS,
  ALLOW_CONTACTS,
  UNALLOW_CONTACTS,
  SEARCH_CONTACTS
} from '../types/contacts'
import createReducer from '../utils/createReducer'

const reducers: reducerMap<contactsState> = {
  [ADD_CONTACTS]: (state, { contacts }: addContactsAction) => {
    return {
      ...state,
      contacts,
      initialized: true,
      loading: false,
      error: null
    }
  },
  [ERR_CONTACTS]: (state, { error }: errContactsAction) => {
    return {
      ...state,
      error,
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
  },
  [SEARCH_CONTACTS]: (state, { search }: searchContactsAction) => {
    return {
      ...state,
      search
    }
  }
}

const contactsReducer = createReducer(reducers, {
  contacts: [],
  initialized: false,
  loading: false,
  allowed: false,
  error: null,
  search: ''
})
export default contactsReducer
