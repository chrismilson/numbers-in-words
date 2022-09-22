import { connect } from 'react-redux'
import { RootState } from '../../state/types/state'
import itoa_english from '../../itoa/english'
import DisplayString from '../components/DisplayString'

const itoa = {
  english = itoa_english,
}

export default connect((state: RootState) => ({ content: itoa[state.language](state.target) }))(
  DisplayString
)
