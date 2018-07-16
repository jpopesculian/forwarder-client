//@flow

import type { Node } from 'react'
import type { sortedContacts } from '../utils/ContactsService'

import React, { Component } from 'react'
import { getAllContacts } from '../utils/ContactsService'
import _ from 'lodash/fp'

type State = {
  loading: boolean,
  error: Error | null,
  contacts: sortedContacts
}
// TODO take in search query
type Props = {
  children: State => Node
}
export default class Contacts extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      loading: true,
      error: null,
      contacts: []
    }
  }
  render() {
    return this.props.children(this.state)
  }
  async componentDidMount() {
    try {
      const contacts = await getAllContacts()
      this.setState({ error: null, loading: false, contacts: contacts })
    } catch (error) {
      this.setState({ error, loading: false })
    }
  }
}
