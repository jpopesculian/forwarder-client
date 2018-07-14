//@flow

import React, { PureComponent } from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'

type Props = {}
export default class Loading extends PureComponent<Props> {
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
