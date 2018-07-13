//@flow
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Contacts from './Contacts'

type Props = {}
export default class ContactsList extends Component<Props> {
  render() {
    return (
      <Contacts>
        {({ loading, error, contacts }) => {
          if (loading) return <Text>Loading Contacts</Text>
          if (error) return <Text>No Contacts...</Text>
          return contacts.map(({ givenName, familyName }) => (
            <View key={givenName}>
              <Text>{`${givenName} ${familyName}`}</Text>
            </View>
          ))
        }}
      </Contacts>
    )
  }
}
