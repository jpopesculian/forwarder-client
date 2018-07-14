//@flow

import type { contact } from '../data/contacts'
import type { SectionBase } from 'react-native/Libraries/Lists/SectionList'

import React, { PureComponent } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Avatar from './Avatar'
import ContactActions from './ContactActions'
import _ from 'lodash/fp'

type Props = {
  item: contact,
  index: number,
  section: SectionBase<contact>
}
export default class ContactsListItem extends PureComponent<Props> {
  render() {
    const { item, index } = this.props
    return (
      <View style={styles.container} key={index}>
        <View style={styles.avatar}>
          <Avatar contact={item} />
        </View>
        <View style={styles.description}>
          <Text
            style={styles.name}
          >{`${item.givenName} ${item.familyName}`}</Text>
          <Text
            style={styles.number}
          >{`${_.get('number', _.first(item.phoneNumbers))}`}</Text>
        </View>
        <View style={styles.actions}>
          <ContactActions contact={item} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  avatar: {
    flex: 0,
    paddingHorizontal: 15,
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  description: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 15,
    flexDirection: 'column',
    paddingVertical: 10
  },
  actions: {
    width: 150,
    paddingHorizontal: 15,
    paddingVertical: 5
  },
  name: {
    color: '#333',
    lineHeight: 27
  },
  number: {
    color: '#aaa',
    lineHeight: 23
  }
})
