import { IEntry } from '@models/entryModel'
import clsx from 'clsx'
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
        <section key={yearGroup.year} className={styles.root}>
          <div className={styles.yearContainer}>
            <h3 className={styles.year}>{yearGroup.year}</h3>
          </div>

          {yearGroup.entries.map((entry, i) => (
            <div key={`${entry.year}-${i}`} className={styles.entry}>
              <div className={styles.date}>
                {entry.day} {entry.month}
              </div>
              <div className={clsx(styles.entryBody, (entry.day || entry.month) && styles.hasDate)}>
                <div>{entry.type}</div>
                <div>{entry.title}</div>
              </div>
            </div>
          ))}
        </section>
      ))}
    </>
  )
}

export default Timeline
