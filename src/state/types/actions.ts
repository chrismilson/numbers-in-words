export enum ActionType {
  SET_TARGET = 'SET_TARGET'
}

export interface SetTargetAction {
  type: ActionType.SET_TARGET
  payload: {
    value: number
  }
}

export type Action = SetTargetAction
