//@flow

import type { contactsState, contact } from '../data/contacts'
import type { Selector } from 'reselect'
import type { state } from '../data/state'
import type { contacts } from '../utils/ContactsService'
import type { SectionBase } from 'react-native/Libraries/Lists/SectionList'

import { getPhoneNumber } from '../data/contacts'
import { createSelector } from 'reselect'
import _ from 'lodash/fp'

export type groupedContacts = { [string]: contacts }
export type indexedContacts = { [string]: contact }
export type sortedContacts = Array<{ key: string, data: contacts }>
export type contactSection = SectionBase<contact> & { title: string }
export type contactSections = Array<contactSection>

const scope: Selector<state, null, contactsState> = (
  state: state
): contactsState => state.contacts

export const isLoading: Selector<state, null, boolean> = createSelector(
  scope,
  ({ loading }: contactsState): boolean => loading
)

export const isInitialized: Selector<state, null, boolean> = createSelector(
  scope,
  ({ initialized }: contactsState): boolean => initialized
)

export const isReady: Selector<state, null, boolean> = createSelector(
  isLoading,
  isInitialized,
  (isLoading: boolean, isInitialized: boolean): boolean =>
    isInitialized && !isLoading
)

export const hasError: Selector<state, null, boolean> = createSelector(
  scope,
  ({ error }: contactsState): boolean => error !== null
)

export const searchTerm: Selector<state, null, string> = createSelector(
  scope,
  ({ search }: contactsState): string => search
)

export const searchTermsList: Selector<
  state,
  null,
  Array<string>
> = createSelector(searchTerm, (search: string): Array<string> =>
  _.map(_.toLower, _.words(search))
)

export const contactsList: Selector<state, null, contacts> = createSelector(
  scope,
  ({ contacts }: contactsState): contacts => contacts
)

export const indexedContactsList: Selector<
  state,
  null,
  indexedContacts
> = createSelector(contactsList, (contacts: contacts): indexedContacts =>
  _.reduce(
    (result: indexedContacts, contact: contact) =>
      _.set(getPhoneNumber(contact), contact, result),
    {},
    contacts
  )
)

export const filteredContactsList: Selector<
  state,
  null,
  contacts
> = createSelector(
  contactsList,
  searchTermsList,
  (contacts: contacts, searchTerms: Array<string>): contacts => {
    if (_.isEmpty(searchTerms)) return contacts
    return _.filter(
      (contact: contact, index: number, collection: typeof contacts): boolean =>
        _.some(
          (term: string): boolean =>
            _.some((searchTerm: string) => {
              if (_.isEmpty(term)) return false
              return term.includes(searchTerm)
            }, searchTerms),
          _.map(_.toLower, _.at(['givenName', 'familyName'], contact))
        ),
      contacts
    )
  }
)

export const groupedContactsList: Selector<
  state,
  null,
  groupedContacts
> = createSelector(
  filteredContactsList,
  (contacts: contacts): groupedContacts =>
    _.reduce(
      (result: groupedContacts, contact: contact) => {
        const key = _.upperCase(_.first(contact.givenName))
        const contactsAtKey = result[key]
        return _.set(
          key,
          _.isArray(contactsAtKey)
            ? _.concat(contactsAtKey, contact)
            : [contact],
          result
        )
      },
      {},
      contacts
    )
)

export const sortedContactsList: Selector<
  state,
  null,
  sortedContacts
> = createSelector(
  groupedContactsList,
  (contacts: groupedContacts): sortedContacts =>
    _.orderBy(
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
)

export const contactsSections: Selector<
  state,
  null,
  Array<contactSection>
> = createSelector(sortedContactsList, (contacts: sortedContacts): Array<
  contactSection
> => _.map(({ key, data }) => ({ title: key, data }), contacts))
