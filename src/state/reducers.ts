import { Action, ActionType } from './types/actions'
import { combineReducers } from 'redux'

const target = (state = 0, action: Action) => {
  switch (action.type) {
    case ActionType.SET_TARGET:
      return action.payload.value
    default:
      return state
  }
}

export default combineReducers({
  target
})
