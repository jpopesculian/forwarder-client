//@flow

import type { Props } from '../containers/MessageInput'

import React, { PureComponent } from 'react'
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableNativeFeedback
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class MessageInputView extends PureComponent<Props> {
  render() {
    const { sendMessage, updateDraft, draft } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            value={draft}
            onChangeText={updateDraft}
            style={styles.input}
            multiline={true}
            underlineColorAndroid={'transparent'}
          />
        </View>
        <TouchableNativeFeedback
          style={styles.sendContainer}
          onPress={() => sendMessage(draft)}
        >
          <View>
            <Icon name={'send'} size={20} color={'#5E35B1'} />
          </View>
        </TouchableNativeFeedback>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    paddingHorizontal: 15
  },
  input: {},
  inputContainer: {
    flex: 1,
    paddingHorizontal: 5
  },
  sendContainer: {
    flex: 0
  }
})
