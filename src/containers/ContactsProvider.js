//@flow

import type { state } from '../data/state'
import type { dispatcher } from '../utils/reduxTypes'

import { connect } from 'react-redux'
import ContactsProviderView from '../components/ContactsProviderView'
import { fetchContacts } from '../actions/contacts'

type Props = {}

const mapStateToProps = (state: state, ownProps: Props) => ({})

const mapDispatchToProps = (dispatch: dispatcher, ownProps: Props) => ({
  onLoad: () => dispatch(fetchContacts())
})

export default connect(mapStateToProps, mapDispatchToProps)(
  ContactsProviderView
)
