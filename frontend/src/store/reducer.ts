import { AppAction } from '@models/action'
import { AppState } from '../models/state'
import { Views } from '../models/views'
import { uiReducer } from './ui/uiReducer'
import { dataReducer } from './data/dataReducer'

export const initialState: AppState = {
  data: {
    entries: [],
    selectedEntry: null,
  },
  ui: {
    view: Views.TIMELINE,
    addEntryIsOpen: false,
    entryDetailsIsOpen: false,
  },
}

export const reducer = (state: AppState, action: AppAction) => {
  return {
    data: dataReducer(state.data, action),
    ui: uiReducer(state.ui, action),
  }
}
