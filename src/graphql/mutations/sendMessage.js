//@flow

import type { mutationResult } from '../../utils/gqlTypes'
import type { message } from '../../data/messages'
import gql from 'graphql-tag'

export type sendMessageData = { sendMessage: { text: message } }
export type sendMessageResult = mutationResult<sendMessageData>

export default gql`
  mutation sendMessage($number: String!, $body: String!) {
    sendMessage(number: $number, body: $body) {
      text {
        id,
        body,
        from,
        to,
        time,
        direction,
        status
      }
    }
  }
`
