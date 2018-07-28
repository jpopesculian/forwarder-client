//@flow

import type {
  connectState,
  connectDispatch,
  ContainerProps
} from '../utils/reduxTypes'
import type { contact } from '../data/contacts'
import type { NavigationScreenProp } from 'react-navigation'
import type { e164number } from '../utils/parseNumber'

import { connect } from 'react-redux'
import { indexedContactsList } from '../selectors/contacts'
import { setCurrentConversation } from '../actions/conversations'
import ConversationView from '../components/ConversationView'

type OwnProps = {
  navigation: NavigationScreenProp
}
type StateProps = {
  contact: contact,
  number: e164number
}
type DispatchProps = {
  setCurrentConversation: e164number => void
}
export type Props = ContainerProps<OwnProps, StateProps, DispatchProps>

const mapStateToProps: connectState<OwnProps, StateProps> = (
  state,
  { navigation }
) => {
  const number = navigation.getParam('number')
  const contact = indexedContactsList(state)[number]
  return {
    number,
    contact
  }
}

const mapDispatchToProps: connectDispatch<OwnProps, DispatchProps> = (
  dispatch,
  ownProps
) => ({
  setCurrentConversation: conversation =>
    dispatch(setCurrentConversation(conversation))
})

export default connect(mapStateToProps, mapDispatchToProps)(ConversationView)
