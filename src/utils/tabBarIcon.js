//@flow

import type { Node } from 'react'
import React, { PureComponent } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

type Props = {
  focused: boolean,
  tintColor: string
}
type iconFunc = Props => Node

export default (name: string): iconFunc => ({ focused, tintColor }) => (
  <Icon name={name} color={tintColor} size={focused ? 25 : 23} />
)
