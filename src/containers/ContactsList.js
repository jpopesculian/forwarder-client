//@flow

import type { state } from '../data/state'
import type { dispatcher } from '../utils/reduxTypes'
import type { contactSections } from '../selectors/contacts'

import { connect } from 'react-redux'
import {
  isLoading,
  isInitialized,
  hasError,
  contactsSections
} from '../selectors/contacts'
import ContactsListView from '../components/ContactsListView'

type OwnProps = {}
type StateProps = {
  isLoading: boolean,
  isInitialized: boolean,
  hasError: boolean,
  sections: contactSections
}
type DispatchProps = {
  reload: () => mixed
}
export type Props = OwnProps & StateProps & DispatchProps

const mapStateToProps = (state: state, ownProps: OwnProps): StateProps => ({
  isLoading: isLoading(state),
  isInitialized: isInitialized(state),
  hasError: hasError(state),
  sections: contactsSections(state)
})

const mapDispatchToProps = (
  state: state,
  ownProps: OwnProps
): DispatchProps => ({
  reload: () => null
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactsListView)
