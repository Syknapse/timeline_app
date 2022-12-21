import { IEntry } from '@models/entryModel'
import { Views } from '@models/views'

export interface DataState {
  entries: IEntry[] | []
  selectedEntry: IEntry | null
}

export interface UIState {
  view: Views
  addEntryIsOpen: boolean
  entryDetailsIsOpen: boolean
}

export interface AppState {
  data: DataState
  ui: UIState
}
