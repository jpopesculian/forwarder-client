//@flow

import type { Props } from '../containers/ContactsSearch'

import React, { PureComponent } from 'react'
import {
  TextInput,
  View,
  TouchableNativeFeedback,
  StyleSheet
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import _ from 'lodash/fp'

export default class ContactsSearchView extends PureComponent<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.icon}>
          <Icon name={'search'} size={20} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            underlineColorAndroid={'transparent'}
            onChangeText={this.props.doSearch}
            value={this.props.search}
          />
        </View>
        {!_.isEmpty(this.props.search) &&
          <TouchableNativeFeedback
            style={styles.icon}
            onPress={() => this.props.doSearch('')}
          >
            <View>
              <Icon name={'clear'} size={20} />
            </View>
          </TouchableNativeFeedback>}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    paddingHorizontal: 5
  },
  input: {},
  container: {
    backgroundColor: '#eee',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    paddingHorizontal: 15
  },
  icon: {
    flex: 0
  },
  cancel: {
    flex: 0
  }
})
