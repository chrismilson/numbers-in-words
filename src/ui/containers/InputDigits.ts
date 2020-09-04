import { connect } from 'react-redux'
import NumberInput from '../components/NumberInput'
import { setTarget } from '../../state/actions'
import { RootState } from '../../state/types/state'

export default connect(
  (state: RootState) => ({ currentValue: state.target }),
  dispatch => ({
    onChange: (value: bigint) => {
      dispatch(setTarget(value))
    }
  })
)(NumberInput)
