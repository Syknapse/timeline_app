import dayjs from 'dayjs'
import localeData from 'dayjs/plugin/localeData'

dayjs.extend(localeData)

export const getTimestamp = (year: string, month: string | undefined, day: string | undefined) => {
  return dayjs(`${year} ${month || '1'} ${day || '1'}`, 'YYYY MM DD').unix() * 1000
}

// dayjs(entry.timestamp).format('YYYY MM DD') // unix timestamp to date
