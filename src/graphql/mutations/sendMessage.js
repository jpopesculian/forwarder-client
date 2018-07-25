//@flow

import gql from 'graphql-tag'

export default gql`
  mutation sendMessage($number: String!, $body: String!) {
    sendMessage(number: $number, body: $body) {
      text {
        body,
        from,
        to
      }
    }
  }
`
