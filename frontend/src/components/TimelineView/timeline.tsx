import { IEntry } from '@models/entryModel'
import { cursorTo } from 'readline'
import styles from './timeline.module.css'

interface ITimelineProps {
  entries: IEntry[]
}

type IYearSorted = {
  year: number
  entries: IEntry[]
}[]

const Timeline: React.FC<ITimelineProps> = ({ entries }) => {
  if (entries.length === 0) return <div>nothing to show yet</div>

  /* const years = [...new Set(entries.map(entry => entry.year))].sort()
  const sortedByYears = years.map(year => {
    let obj: { year: number; entries: IEntry[] | null } = { year, entries: [] }
    obj.entries = entries.filter(entry => entry.year === year)
    return obj
  }) */

  // Create a new array with one object per year which has all the entries from that year. Sort in ascending
  const sortedByYears: IYearSorted = entries.reduce((acc: IYearSorted, cur) => {
    const currentYear = acc.find(a => a.year === cur.year)
    if (currentYear) {
      currentYear.entries.push(cur)
    } else {
      acc.push({ year: cur.year, entries: [cur] })
    }
    return acc.sort((a, b) => a.year - b.year)
  }, [])

  console.log('sortedByYears: ', sortedByYears)

  return (
    <>
      {entries.map(entry => (
        <section>
          <div>{entry.year}</div>
          <div>{entry.type}</div>
          <div>{entry.title}</div>
        </section>
      ))}
    </>
  )
}

export default Timeline
