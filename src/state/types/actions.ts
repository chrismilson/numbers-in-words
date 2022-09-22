export enum ActionType {
  SET_TARGET = 'SET_TARGET'
  SET_LANGUAGE = 'SET_LANGUAGE'
}

export interface SetTargetAction {
  type: ActionType.SET_TARGET
  payload: {
    value: bigint
  }
}

export interface SetLanguageAction {
  type: ActionType.SET_LANGUAGE
  payload: {
    value: string
  }
}

export type Action = SetTargetAction
