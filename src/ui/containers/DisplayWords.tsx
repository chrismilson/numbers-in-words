import { connect } from 'react-redux'
import { RootState } from '../../state/types/state'
import itoa from '../../itoa'
import DisplayString from '../components/DisplayString'

export default connect((state: RootState) => ({ content: itoa(state.target) }))(
  DisplayString
)
