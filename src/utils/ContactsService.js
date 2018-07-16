//@flow

import type { contact } from '../data/contacts'

import { PermissionsAndroid } from 'react-native'
// import ContactsProvider from 'react-native-contacts'
import ContactsProvider from '../controls/ContactsProvider'
import _ from 'lodash/fp'

export type contacts = Array<contact>
export type groupedContacts = { [string]: contacts }
export type sortedContacts = Array<{ key: string, data: contacts }>

export async function getAllContacts(): Promise<sortedContacts> {
  await requestContactPermission()
  return _.flow(groupContacts, sortContacts)(await getAllContactsFromProvider())
}

export async function requestContactPermission(): Promise<boolean> {
  // TODO change these words
  const granted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
    {
      title: 'Cool Photo App Camera Permission',
      message: 'Cool Photo App needs access to your camera ' +
        'so you can take awesome pictures.'
    }
  )
  if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    return true
  } else {
    return false
  }
}

export function getAllContactsFromProvider(): Promise<contacts> {
  return new Promise((resolve, reject) => {
    ContactsProvider.getAll((err, contacts) => {
      if (err) reject(err)
      resolve(contacts)
    })
  })
}

function groupContacts(contacts: contacts): groupedContacts {
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
}

function sortContacts(contacts: groupedContacts): sortedContacts {
  return _.orderBy(
    'key',
    ['asc'],
    _.zipWith(
      (key, data) => {
        return { key, data }
      },
      _.keys(contacts),
      _.orderBy(['givenName', 'familyName'], ['asc', 'asc'], _.values(contacts))
    )
  )
}
