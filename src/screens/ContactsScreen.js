//@flow

import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import Contacts from '../components/Contacts'
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
        <Contacts />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
