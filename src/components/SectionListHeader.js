//@flow

import type { SectionBase } from 'react-native/Libraries/Lists/SectionList'
import type { contact } from '../data/contacts'

import React, { PureComponent } from 'react'
import { View, Text, StyleSheet } from 'react-native'

type Props = {
  section: SectionBase<any> & { title: string }
}

export default class SectionListHeader extends PureComponent<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.section.title}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    paddingVertical: 6,
    paddingHorizontal: 15
  },
  text: {
    color: '#aaa'
  }
})
