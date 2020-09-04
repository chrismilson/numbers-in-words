export enum ActionType {
  SET_TARGET = 'SET_TARGET'
}

export interface SetTargetAction {
  type: ActionType.SET_TARGET
  payload: {
    value: bigint
  }
}

export type Action = SetTargetAction
