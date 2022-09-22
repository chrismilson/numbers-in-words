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

const language = (state = undefined, action: Action) => {
  switch (action.type) {
    case ActionType.SET_LANGUAGE:
      const name = action.payload.value
      const maxValue = MAX_SAFE_NUMBER[name]
      return { name, maxValue }
    default:
      return state
  }
}

export default combineReducers({
  target,
  language
})
