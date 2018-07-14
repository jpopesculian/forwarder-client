//@flow

import type { SectionBase } from 'react-native/Libraries/Lists/SectionList'
import React, { PureComponent } from 'react'
import { View, StyleSheet } from 'react-native'

type Props = {
  highlighted: boolean,
  section: SectionBase<any>
}
export default class SectionListItemSeparator extends PureComponent<Props> {
  render() {
    return <View style={styles.separator} />
  }
}

const styles = StyleSheet.create({
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: '#eee'
  }
})
