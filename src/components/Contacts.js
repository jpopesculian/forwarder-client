//@flow

import type { Node } from 'react'
import type { contact } from '../data/contacts'

import React, { Component } from 'react'
import { PermissionsAndroid } from 'react-native'
// import ContactsProvider from 'react-native-contacts'
import ContactsProvider from '../controls/ContactsProvider'

function getAllContactsFromProvider() {
  return new Promise((resolve, reject) => {
    ContactsProvider.getAll((err, contacts) => {
      if (err) reject(err)
      resolve(contacts)
    })
  })
}

async function requestContactPermission() {
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

async function getAllContacts() {
  await requestContactPermission()
  return await getAllContactsFromProvider()
}

type State = {
  loading: boolean,
  error: Error | null,
  contacts: Array<contact>
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
