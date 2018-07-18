//@flow

import gql from 'graphql-tag'

export default gql`
  mutation sendMessage($number: String, $body: String) {
    texts {
      body,
      from,
      to
    }
  }
`
