//@flow

import React, { PureComponent } from 'react'
import RootStack from './screens/RootStack'
import { setNavigator } from './utils/NavigationService'

type Props = {}
export default class Main extends PureComponent<Props> {
  render() {
    return <RootStack ref={ref => setNavigator(ref)} />
  }
}
