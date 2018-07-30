//@flow

import type {
  connectState,
  connectDispatch,
  ContainerProps
} from '../utils/reduxTypes'

import { connect } from 'react-redux'
import MessageInputView from '../components/MessageInputView'
import { sendMessage, updateDraft } from '../actions/messages'
import { currentMessagesDraft } from '../selectors/messages'

type OwnProps = {
  number: string
}
type StateProps = {
  draft: string
}
type DispatchProps = {
  sendMessage: (body: string) => void,
  updateDraft: (body: string) => void
}
export type Props = ContainerProps<OwnProps, StateProps, DispatchProps>

const mapStateToProps: connectState<OwnProps, StateProps> = (
  state,
  ownProp
) => ({
  draft: currentMessagesDraft(state)
})

const mapDispatchToProps: connectDispatch<OwnProps, DispatchProps> = (
  dispatch,
  { number }
) => ({
  sendMessage: body => dispatch(sendMessage(number, body)),
  updateDraft: body => dispatch(updateDraft(number, body))
})

export default connect(mapStateToProps, mapDispatchToProps)(MessageInputView)
