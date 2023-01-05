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
