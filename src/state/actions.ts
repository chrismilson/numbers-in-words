import { ActionType, SetTargetAction } from './types/actions'

export const setTarget = (value: number): SetTargetAction => ({
  type: ActionType.SET_TARGET,
  payload: { value }
})
