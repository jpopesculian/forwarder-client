//@flow

import type { state } from '../data/state'
import type { dispatcher } from '../utils/reduxTypes'
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
export type Props = OwnProps & StateProps & DispatchProps

const mapStateToProps = (state: state, ownProps: OwnProps): StateProps => ({
  isReady: isReady(state),
  hasError: hasError(state),
  sections: contactsSections(state)
})

const mapDispatchToProps = (
  dispatch: dispatcher,
  ownProps: OwnProps
): DispatchProps => ({
  reload: () => dispatch(fetchContacts())
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactsListView)
