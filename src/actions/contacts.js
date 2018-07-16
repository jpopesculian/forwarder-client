// @flow

import type { action, asyncAction } from '../utils/reduxTypes'
import type { contact } from '../data/contacts'
import type { contacts } from '../utils/ContactsService'
import {
  ADD_CONTACTS,
  LOAD_CONTACTS,
  ERR_CONTACTS,
  ALLOW_CONTACTS,
  UNALLOW_CONTACTS
} from '../types/contacts'
import {
  requestContactPermission,
  getAllContactsFromProvider
} from '../utils/ContactsService'

export type addContactsAction = action & {
  contacts: contacts
}
export type loadContactsAction = action
export type errContactsAction = action & {
  error: Error
}
export type allowContactsAction = action
export type unallowContactsAction = action

export const addContacts = (contacts: contacts): addContactsAction => ({
  type: ADD_CONTACTS,
  contacts
})

export const loadContacts = (): loadContactsAction => ({
  type: LOAD_CONTACTS
})

export const errContacts = (error: Error): errContactsAction => ({
  type: ERR_CONTACTS,
  error
})

export const allowContacts = (): allowContactsAction => ({
  type: ALLOW_CONTACTS
})

export const unallowContacts = (): unallowContactsAction => ({
  type: UNALLOW_CONTACTS
})

export const fetchContacts = (): asyncAction => {
  return async dispatch => {
    dispatch(loadContacts())
    try {
      const allowed = await requestContactPermission()
      if (allowed) {
        dispatch(allowContacts())
        const contacts = await getAllContactsFromProvider()
        return dispatch(addContacts(contacts))
      } else {
        return dispatch(unallowContacts())
      }
    } catch (err) {
      return dispatch(errContacts(err))
    }
  }
}
