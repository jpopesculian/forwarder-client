//@flow

import type {
  connectState,
  connectDispatch,
  ContainerProps
} from '../utils/reduxTypes'
import type { messagesQueryResult } from '../graphql/queries/messages'
import type { contactSections } from '../selectors/contacts'
import type { message, keyedMessages } from '../data/messages'

import _ from 'lodash/fp'
import React, { PureComponent } from 'react'
import { Query } from 'react-apollo'
import query from '../graphql/queries/messages'
import { fetchMessages } from '../actions/messages'

import { connect } from 'react-redux'

type OwnProps = {
  number: string
}
type StateProps = {}
type DispatchProps = {
  fetchMessages: () => void
}
export type Props = ContainerProps<OwnProps, StateProps, DispatchProps>

const mapStateToProps: connectState<OwnProps, StateProps> = (
  state,
  ownProps
) => ({})

const mapDispatchToProps: connectDispatch<OwnProps, DispatchProps> = (
  dispatch,
  { number }: OwnProps
) => ({
  fetchMessages: () => dispatch(fetchMessages(number))
})

class MessagesProviderView extends PureComponent<Props> {
  render() {
    return null
  }
  componentDidMount() {
    this.props.fetchMessages()
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  MessagesProviderView
)
