//@flow

import type {
  connectState,
  connectDispatch,
  ContainerProps
} from '../utils/reduxTypes'

import { connect } from 'react-redux'
import { searchTerm } from '../selectors/contacts'
import { searchContacts } from '../actions/contacts'
import ContactsSearchView from '../components/ContactsSearchView'

type OwnProps = {}
type StateProps = {
  search: string
}
type DispatchProps = {
  doSearch: string => any
}
export type Props = ContainerProps<OwnProps, StateProps, DispatchProps>

const mapStateToProps: connectState<OwnProps, StateProps> = (
  state,
  ownProps
) => ({
  search: searchTerm(state)
})

const mapDispatchToProps: connectDispatch<OwnProps, DispatchProps> = (
  dispatch,
  ownProps
) => ({
  doSearch: search => dispatch(searchContacts(search))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactsSearchView)
