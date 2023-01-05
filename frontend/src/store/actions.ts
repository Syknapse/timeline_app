import { Types } from './types'
import * as ActionModels from '../models/action'
import { IEntry } from '../models/entryModels'

export const addEntry = (entry: IEntry): ActionModels.AddEntryAction => {
  return {
    type: Types.ADD_ENTRY,
    payload: {
      entry,
    },
  }
}

export const editEntry = (entry: IEntry): ActionModels.EditEntry => {
  return {
    type: Types.EDIT_ENTRY,
    payload: {
      entry,
    },
  }
}

export const deleteEntry = (id: string): ActionModels.DeleteEntry => {
  return {
    type: Types.DELETE_ENTRY,
    payload: {
      id,
    },
  }
}

export const changeViewTimeLapse = (): ActionModels.ViewAction => {
  return {
    type: Types.VIEW_TIME_LAPSE,
  }
}

export const changeViewTimeline = (): ActionModels.ViewAction => {
  return {
    type: Types.VIEW_TIMELINE,
  }
}

export const visibilityToggleAddEntry = (): ActionModels.AddEntryVisibilityAction => {
  return {
    type: Types.VISIBILITY_TOGGLE_ADD_ENTRY,
  }
}

export const showEntryDetails = (entry: IEntry): ActionModels.ShowEntryDetails => {
  return {
    type: Types.SHOW_ENTRY_DETAILS,
    payload: {
      entry,
    },
  }
}

export const hideEntryDetails = (): ActionModels.HideEntryDetails => {
  return {
    type: Types.HIDE_ENTRY_DETAILS,
  }
}
