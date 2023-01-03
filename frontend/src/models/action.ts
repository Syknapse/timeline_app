import { Types } from 'store/types'
import { IEntry } from '@models/entryModel'

export type AddEntryAction = {
  type: Types.ADD_ENTRY
  payload: { entry: IEntry }
}

export type EditEntry = {
  type: Types.EDIT_ENTRY
  payload: { entry: IEntry }
}

export type DeleteEntry = {
  type: Types.DELETE_ENTRY
  payload: { id: string }
}

export type AddEntryVisibilityAction = {
  type: Types.VISIBILITY_TOGGLE_ADD_ENTRY
}

export type ShowEntryDetails = {
  type: Types.SHOW_ENTRY_DETAILS
  payload: { entry: IEntry }
}

export type HideEntryDetails = {
  type: Types.HIDE_ENTRY_DETAILS
}

export type ViewAction = {
  type: Types.VIEW_TIMELINE | Types.VIEW_TIME_LAPSE
}

export type UIAction = ViewAction | AddEntryVisibilityAction | ShowEntryDetails | HideEntryDetails

export type AppAction = AddEntryAction | EditEntry | DeleteEntry | UIAction
