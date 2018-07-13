// @flow

import { YellowBox } from 'react-native'

YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated',
  'Module RCTImageLoader'
])

const oldErrorFn = console.error
//$FlowFixMe
console.error = console.warn
export default oldErrorFn
