import { AppRegistry } from 'react-native'
import patchConsoleError from './src/utils/patchConsoleError'
import App from './App'

// window.DateTime = DateTime

// TODO remove
import _ from 'lodash/fp'
window._ = _

AppRegistry.registerComponent('Forwarder', () => App)
