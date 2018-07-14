//@flow

import type { Node } from 'react'
import type { contact } from '../data/contacts'

import React, { Component } from 'react'
import { PermissionsAndroid } from 'react-native'
// import ContactsProvider from 'react-native-contacts'
import ContactsProvider from '../controls/ContactsProvider'
import _ from 'lodash/fp'

type contacts = Array<contact>
type groupedContacts = { [string]: contacts }
type sortedContacts = Array<{ key: string, data: contacts }>
type State = {
  loading: boolean,
  error: Error | null,
  contacts: sortedContacts
}
// TODO take in search query
type Props = {
  children: State => Node
}
export default class Contacts extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      loading: true,
      error: null,
      contacts: []
    }
  }
  render() {
    return this.props.children(this.state)
  }
  async componentDidMount() {
    try {
      const contacts = await getAllContacts()
      this.setState({ error: null, loading: false, contacts: contacts })
    } catch (error) {
      this.setState({ error, loading: false })
    }
  }
}

function getAllContactsFromProvider(): Promise<contacts> {
  return new Promise((resolve, reject) => {
    ContactsProvider.getAll((err, contacts) => {
      if (err) reject(err)
      resolve(contacts)
    })
  })
}

async function requestContactPermission(): Promise<boolean> {
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
    throw 'Camera permission denied'
  }
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

async function getAllContacts(): Promise<sortedContacts> {
  await requestContactPermission()
  return _.flow(groupContacts, sortContacts)(await getAllContactsFromProvider())
}
