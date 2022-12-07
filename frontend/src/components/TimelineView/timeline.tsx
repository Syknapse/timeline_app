import { IEntry } from '@models/entryModel'
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

  return (
    <>
      {sortedByYears.map(yearGroup => (
        <section className={styles.section}>
          <h3 className={styles.year}>{yearGroup.year}</h3>
          {yearGroup.entries.map(entry => (
            <div className={styles.entry}>
              <div>{entry.type}</div>
              <div>{entry.title}</div>
            </div>
          ))}
        </section>
      ))}
    </>
  )
}

export default Timeline
