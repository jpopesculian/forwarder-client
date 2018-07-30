//@flow

import type { mutationResult } from '../../utils/gqlTypes'
import type { message } from '../../data/messages'
import gql from 'graphql-tag'

export type sendMessageMutationData = { sendMessage: { text: message } }
export type sendMessageMutationResult = mutationResult<sendMessageMutationData>

export default gql`
  mutation sendMessage($number: String!, $body: String!) {
    sendMessage(number: $number, body: $body) {
      text {
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
