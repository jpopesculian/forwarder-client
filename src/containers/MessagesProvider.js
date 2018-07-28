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
import { loadMessages, errMessages, updateMessages } from '../actions/messages'

import { connect } from 'react-redux'

type OwnProps = {
  number: string
}
type StateProps = {}
type DispatchProps = {
  loadMessages: boolean => void,
  errMessages: (string | void) => void,
  updateMessages: keyedMessages => void
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
  loadMessages: loading => dispatch(loadMessages(number, loading)),
  errMessages: error => dispatch(errMessages(number, error)),
  updateMessages: messages => dispatch(updateMessages(number, messages))
})

class MessagesProviderView extends PureComponent<Props> {
  render() {
    return (
      <Query query={query}>
        {({ loading, error, data }: messagesQueryResult) => {
          this.props.loadMessages(loading)
          this.props.errMessages(error)
          if (loading || error) {
            return null
          }
          const messages = _.reduce(
            (result: { [string]: message }, item: message) =>
              _.set(_.get('id', item), item, result),
            {},
            data.texts
          )
          this.props.updateMessages(messages)
          return null
        }}
      </Query>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  MessagesProviderView
)
