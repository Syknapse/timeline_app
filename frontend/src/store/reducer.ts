import { AppAction } from '@models/action'
import { AppState } from '../models/state'
import { Views } from '../models/views'
import { Types } from './types'

export const initialState: AppState = {
  entry: null,
  ui: {
    view: Views.TIMELINE,
    addEntryIsOpen: false,
  },
}

export const reducer = (state: AppState, action: AppAction) => {
  switch (action.type) {
    case Types.ADD_ENTRY:
      return {
        ...state,
        entry: action.payload.entry,
      }
    case Types.VIEW_TIMELINE:
      return {
        ...state,
        ui: {
          ...state.ui,
          view: Views.TIMELINE,
        },
      }
    case Types.VIEW_TIME_LAPSE:
      return {
        ...state,
        ui: {
          ...state.ui,
          view: Views.TIME_LAPSE,
        },
      }
    case Types.VISIBILITY_TOGGLE_ADD_ENTRY:
      return {
        ...state,
        ui: {
          ...state.ui,
          addEntryIsOpen: !state.ui.addEntryIsOpen,
        },
      }
    default:
      throw new Error(`Unknown action dispatched: ${action}`)
  }
}
