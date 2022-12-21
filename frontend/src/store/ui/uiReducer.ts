import { AppAction } from '@models/action'
import { AppState } from '@models/state'
import { Views } from '../../models/views'
import { Types } from '../types'

export const uiReducer = (state: AppState['ui'], action: AppAction) => {
  switch (action.type) {
    case Types.VIEW_TIMELINE:
      return {
        ...state,
        view: Views.TIMELINE,
      }
    case Types.VIEW_TIME_LAPSE:
      return {
        ...state,
        view: Views.TIME_LAPSE,
      }
    case Types.VISIBILITY_TOGGLE_ADD_ENTRY:
      return {
        ...state,
        addEntryIsOpen: !state.addEntryIsOpen,
      }
    case Types.SHOW_ENTRY_DETAILS:
      return {
        ...state,
        entryDetailsIsOpen: true,
      }
    case Types.HIDE_ENTRY_DETAILS:
      return {
        ...state,
        entryDetailsIsOpen: false,
      }
    default:
      return state
  }
}
