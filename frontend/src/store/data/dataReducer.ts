import { AppAction } from '@models/action'
import { AppState } from '@models/state'
import { Types } from '../types'

export const dataReducer = (state: AppState['data'], action: AppAction) => {
  switch (action.type) {
    case Types.ADD_ENTRY:
      return {
        ...state,
        entries: [...state.entries, action.payload.entry],
      }
    case Types.EDIT_ENTRY:
      return {
        ...state,
        entries: state.entries.map(entry => (entry.id === action.payload.entry.id ? action.payload.entry : entry)),
        selectedEntry: action.payload.entry,
      }
    case Types.DELETE_ENTRY:
      return {
        ...state,
        entries: state.entries.filter(entry => entry.id !== action.payload.id),
      }
    case Types.SHOW_ENTRY_DETAILS:
      return {
        ...state,
        selectedEntry: action.payload.entry,
      }
    case Types.HIDE_ENTRY_DETAILS:
      return {
        ...state,
        selectedEntry: null,
      }
    default:
      return state
  }
}
