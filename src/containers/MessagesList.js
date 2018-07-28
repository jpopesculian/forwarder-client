//@flow

import type {
  connectState,
  connectDispatch,
  ContainerProps
} from '../utils/reduxTypes'
import type { messageSections } from '../selectors/messages'

import { connect } from 'react-redux'
import { isReady, hasError, messagesSections } from '../selectors/messages'
import MessagesListView from '../components/MessagesListView'

type OwnProps = {}
type StateProps = {
  isReady: boolean,
  hasError: boolean,
  sections: messageSections
}
type DispatchProps = {}
export type Props = ContainerProps<OwnProps, StateProps, DispatchProps>

const mapStateToProps: connectState<OwnProps, StateProps> = (
  state,
  ownProps
) => ({
  isReady: isReady(state),
  hasError: hasError(state),
  sections: messagesSections(state)
})

const mapDispatchToProps: connectDispatch<OwnProps, DispatchProps> = (
  dispatch,
  ownProps
) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(MessagesListView)
