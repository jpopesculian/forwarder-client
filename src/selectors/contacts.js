//@flow

import type { contactsState, contact } from '../data/contacts'
import type { Selector } from 'reselect'
import type { state } from '../data/state'
import type { contacts } from '../utils/ContactsService'
import type { SectionBase } from 'react-native/Libraries/Lists/SectionList'

import { createSelector } from 'reselect'
import _ from 'lodash/fp'

export type groupedContacts = { [string]: contacts }
export type sortedContacts = Array<{ key: string, data: contacts }>
export type contactSection = SectionBase<contact> & { title: string }
export type contactSections = Array<contactSection>

const scope: Selector<state, null, contactsState> = (
  state: state
): contactsState => state.contacts

export const isLoading: Selector<
  state,
  null,
  boolean
> = createSelector(scope, (contacts: contactsState): boolean => {
  return contacts.loading
})

export const isInitialized: Selector<
  state,
  null,
  boolean
> = createSelector(scope, (contacts: contactsState): boolean => {
  return contacts.initialized
})

export const hasError: Selector<
  state,
  null,
  boolean
> = createSelector(scope, (contacts: contactsState): boolean => {
  return contacts.error !== null
})

export const contactsList: Selector<
  state,
  null,
  contacts
> = createSelector(scope, (contacts: contactsState): contacts => {
  return contacts.contacts
})

export const groupedContactsList: Selector<
  state,
  null,
  groupedContacts
> = createSelector(contactsList, (contacts: contacts): groupedContacts => {
  return _.reduce(
    (result: groupedContacts, contact: contact) => {
      const key = _.upperCase(_.first(contact.givenName))
      const contactsAtKey = result[key]
      return _.set(
        key,
        _.isArray(contactsAtKey) ? _.concat(contactsAtKey, contact) : [contact],
        result
      )
    },
    {},
    contacts
  )
})

export const sortedContactsList: Selector<
  state,
  null,
  sortedContacts
> = createSelector(
  groupedContactsList,
  (contacts: groupedContacts): sortedContacts => {
    return _.orderBy(
      'key',
      ['asc'],
      _.zipWith(
        (key, data) => {
          return { key, data }
        },
        _.keys(contacts),
        _.orderBy(
          ['givenName', 'familyName'],
          ['asc', 'asc'],
          _.values(contacts)
        )
      )
    )
  }
)

export const contactsSections: Selector<
  state,
  null,
  Array<contactSection>
> = createSelector(sortedContactsList, (contacts: sortedContacts): Array<
  contactSection
> => {
  return _.map(({ key, data }) => {
    return { title: key, data }
  }, contacts)
})
