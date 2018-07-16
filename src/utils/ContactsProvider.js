//@flow

import type { state } from '../data/state'
import type { dispatcher } from '../utils/reduxTypes'
import type { Node } from 'react'

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchContacts } from '../actions/contacts'

type OwnProps = {
  children: Node
}
type StateProps = {}
type DispatchProps = {
  onLoad: () => mixed
}
type Props = OwnProps & StateProps & DispatchProps

const mapStateToProps = (state: state, ownProps: OwnProps): StateProps => ({})

const mapDispatchToProps = (
  dispatch: dispatcher,
  ownProps: OwnProps
): DispatchProps => ({
  onLoad: () => dispatch(fetchContacts())
})

class ContactsProviderView extends PureComponent<Props> {
  render() {
    return this.props.children
  }
  componentDidMount() {
    this.props.onLoad()
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  ContactsProviderView
)
