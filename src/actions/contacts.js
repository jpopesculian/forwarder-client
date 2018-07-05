// @flow

import type { contact } from '../data/contacts'
import { ADD_CONTACTS } from '../types/contacts'

export type addContactAction = {
  type: string,
  contacts: Array<contact>
}
export const addcontacts = (contacts: Array<contact>): addContactAction => ({
  type: ADD_CONTACTS,
  contacts: contacts
})
