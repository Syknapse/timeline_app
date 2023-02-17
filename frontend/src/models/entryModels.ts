export interface IEntry {
  id: string
  timestamp: number
  year: string
  title: string
  day?: string
  month?: string
  color?: string
  category?: ICategory
  subtitle?: string
  description?: string
}

export type ICategory = {
  icon: string
  description: string
}

export enum Categories {
  HOME = 'HOME',
  LIFE_EVENT = 'LIFE_EVENT',
  JOB = 'JOB',
  FAMILY = 'FAMILY',
  TRAVEL = 'TRAVEL',
  GENERAL = 'GENERAL',
}

export enum Colors {
  red = '#ec1414',
  purple = '#142aec',
  green = '#14ec62',
  yellow = '#ece414',
}
