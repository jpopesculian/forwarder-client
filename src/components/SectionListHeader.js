//@flow

import type { SectionHeaderProps } from '../utils/sectionify'

import React, { PureComponent } from 'react'
import { View, Text, StyleSheet } from 'react-native'

type Props = SectionHeaderProps<any>

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
