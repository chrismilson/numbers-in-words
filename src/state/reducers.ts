import { Action, ActionType } from './types/actions'
import { combineReducers } from 'redux'
import { MAX_SAFE_NUMBER } from '../itoa'

const target = (state = 0n, action: Action) => {
  switch (action.type) {
    case ActionType.SET_TARGET:
      return action.payload.value <= MAX_SAFE_NUMBER &&
        action.payload.value >= -MAX_SAFE_NUMBER
        ? action.payload.value
        : state
    default:
      return state
  }
}

const language = (state = "english", action: Action) => {
  switch (action.type) {
    case ActionType.SET_LANGUAGE:
      return action.payload.value
    default:
      return state
  }
}

export default combineReducers({
  target
})
