// @flow

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './src/store'
import Root from './src/Root'

type Props = {}
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    )
  }
}
