import { Types } from './types'
import { AddEntryAction, ViewAction } from '@models/action'
import { IEntry } from '@models/entryModel'

export const addEntry = (entry: IEntry): AddEntryAction => {
  return {
    type: Types.ADD_ENTRY,
    payload: {
      entry,
    },
  }
}

export const changeViewTimeLapse = (): ViewAction => {
  return {
    type: Types.VIEW_TIME_LAPSE,
  }
}

export const changeViewTimeline = (): ViewAction => {
  return {
    type: Types.VIEW_TIMELINE,
  }
}