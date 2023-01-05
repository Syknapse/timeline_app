import dayjs from 'dayjs'
import localeData from 'dayjs/plugin/localeData'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(localeData)
dayjs.extend(relativeTime)

export const getTimestamp = (year: string, month: string | undefined, day: string | undefined) => {
  return dayjs(`${year} ${month || '1'} ${day || '1'}`, 'YYYY MM DD').unix() * 1000
}

export const getTimeFromNow = (date: number | string) => {
  return dayjs(date).fromNow()
}

// dayjs(entry.timestamp).format('YYYY MM DD') // unix timestamp to date
