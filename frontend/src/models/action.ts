import { Types } from 'store/types'
import { IEntry } from '@models/entryModel'

export type AddEntryAction = {
  type: Types.ADD_ENTRY
  payload: { entry: IEntry }
}

export type AddEntryVisibilityAction = {
  type: Types.VISIBILITY_TOGGLE_ADD_ENTRY
}

export type ViewAction = {
  type: Types.VIEW_TIMELINE | Types.VIEW_TIME_LAPSE
}

export type UIAction = ViewAction | AddEntryVisibilityAction

export type AppAction = AddEntryAction | UIAction
