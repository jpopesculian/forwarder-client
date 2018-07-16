import React, { PureComponent } from 'react'
import type { Node } from 'react'

type Props = {
  onLoad: () => mixed,
  children: Node
}
export default class ContactsProviderView extends PureComponent<Props> {
  render() {
    return this.props.children
  }
  componentDidMount() {
    this.props.onLoad()
  }
}
