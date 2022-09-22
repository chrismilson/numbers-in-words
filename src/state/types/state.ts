/**
 * This is the shape of the entire app state object.
 */
export interface RootState {
  readonly target: bigint
  readonly language?: {
    name: string
    max_value: bigint
  }
}
