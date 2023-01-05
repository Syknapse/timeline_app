import { useContext } from 'react'
import { IEntry } from '../../models/entryModels'
import { UIContext } from 'App'
import { showEntryDetails } from '../../store/actions'
import { TimelineEntry } from '../../components'
import styles from './timeline.module.css'

interface ITimelineProps {
  entries: IEntry[]
}

type IYearSorted = {
  year: string
  entries: IEntry[]
}[]

const Timeline: React.FC<ITimelineProps> = ({ entries }) => {
  const { state, dispatch } = useContext(UIContext)

  if (entries.length === 0) return <div>nothing to show yet</div>

  // Create a new array with one object per year which has all the entries from that year. Sort in ascending
  const sortedByYears: IYearSorted = entries.reduce((acc: IYearSorted, cur) => {
    const currentYear = acc.find(a => a.year === cur.year)
    if (currentYear) {
      currentYear.entries.push(cur)
    } else {
      acc.push({ year: cur.year, entries: [cur] })
    }
    return acc.sort((a, b) => Number(a.year) - Number(b.year))
  }, [])

  return (
    <>
      {sortedByYears.map(yearGroup => (
        <section key={yearGroup.year} className={styles.root}>
          <div className={styles.yearContainer}>
            <h3 className={styles.year}>{yearGroup.year}</h3>
          </div>

          {yearGroup.entries.map((entry, i) => (
            <TimelineEntry key={`${entry.year}-${i}`} entry={entry} open={() => dispatch(showEntryDetails(entry))} />
          ))}
        </section>
      ))}
    </>
  )
}

export default Timeline
