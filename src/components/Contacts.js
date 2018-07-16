//@flow

import React, { PureComponent } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import ContactsList from '../containers/ContactsList'
import ContactsSearch from '../containers/ContactsSearch'

type Props = {}
export default class Contacts extends PureComponent<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <ContactsSearch />
        </View>
        <View style={styles.listContainer}>
          <ContactsList />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  searchContainer: {
    flex: 0,
    padding: 10
  },
  listContainer: {
    flex: 1
  }
})
