import { ActionType, SetTargetAction, SetLanguageAction } from './types/actions'

export const setTarget = (value: bigint): SetTargetAction => ({
  type: ActionType.SET_TARGET,
  payload: { value }
})

export const setLanguage = (value: string): SetLanguageAction => ({
  type: ActionType.SET_LANGUAGE,
  payload: { value }
})
