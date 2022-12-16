import { IEntry } from '@models/entryModel'
import { AppAction } from '@models/action'
import { Views } from '../models/views'
import { Types } from './types'

interface AppState {
  entry: IEntry | null
  view: Views
}

export const initialState: AppState = {
  entry: null,
  view: Views.TIMELINE,
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
        view: Views.TIMELINE,
      }
    case Types.VIEW_TIME_LAPSE:
      return {
        ...state,
        view: Views.TIME_LAPSE,
      }
    default:
      throw new Error(`Unknown action dispatched: ${action}`)
  }
}
