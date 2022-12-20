import { IEntry } from '@models/entryModel'
import { Views } from './views'

export interface AppState {
  entry: IEntry | null
  selectedEntry: IEntry | null
  ui: {
    view: Views
    addEntryIsOpen: boolean
    entryDetailsIsOpen: boolean
  }
}

export interface UIState {
  view: Views
  addEntryIsOpen: boolean
  entryDetailsIsOpen: boolean
}
// export type UIState = Pick<AppState, 'ui'>
