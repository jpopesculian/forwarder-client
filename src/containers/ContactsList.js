//@flow

import type {
  connectState,
  connectDispatch,
  ContainerProps
} from '../utils/reduxTypes'
import type { contactSections } from '../selectors/contacts'

import { connect } from 'react-redux'
import { isReady, hasError, contactsSections } from '../selectors/contacts'
import { fetchContacts } from '../actions/contacts'
import ContactsListView from '../components/ContactsListView'

type OwnProps = {}
type StateProps = {
  isReady: boolean,
  hasError: boolean,
  sections: contactSections
}
type DispatchProps = {
  reload: () => void
}
export type Props = ContainerProps<OwnProps, StateProps, DispatchProps>

const mapStateToProps: connectState<OwnProps, StateProps> = (
  state,
  ownProps
) => ({
  isReady: isReady(state),
  hasError: hasError(state),
  sections: contactsSections(state)
})

const mapDispatchToProps: connectDispatch<OwnProps, DispatchProps> = (
  dispatch,
  ownProps
) => ({
  reload: () => dispatch(fetchContacts())
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactsListView)
