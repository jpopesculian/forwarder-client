import gql from 'graphql-tag'

export default gql`
{
  texts {
    body,
    from,
    to
  }
}
`
