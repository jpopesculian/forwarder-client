//@flow

import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import ContactsList from '../containers/ContactsList'
import tabBarIcon from '../utils/tabBarIcon'

type Props = {}
export default class ContactsScreen extends Component<Props> {
  static navigationOptions = {
    title: 'Contacts',
    tabBarIcon: tabBarIcon('contacts')
  }
  render() {
    return (
      <View style={styles.container}>
        <ContactsList />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
