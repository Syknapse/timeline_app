import { Types } from 'store/types'
import { IEntry } from '@models/entryModel'

export type AddEntryAction = {
  type: Types.ADD_ENTRY
  payload: { entry: IEntry }
}

export type ViewAction = {
  type: Types.VIEW_TIMELINE | Types.VIEW_TIME_LAPSE
}

export type AppAction = AddEntryAction | ViewAction
