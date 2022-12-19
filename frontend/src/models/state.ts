import { IEntry } from '@models/entryModel'
import { Views } from './views'

export interface AppState {
  entry: IEntry | null
  ui: {
    view: Views
    addEntryIsOpen: boolean
  }
}
export interface UIState {
  view: Views
  addEntryIsOpen: boolean
}
