import { ActionType, SetTargetAction } from './types/actions'

export const setTarget = (value: bigint): SetTargetAction => ({
  type: ActionType.SET_TARGET,
  payload: { value }
})
