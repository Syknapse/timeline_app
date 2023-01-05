import clsx from 'clsx'
import dayjs from 'dayjs'
import { IEntry } from '../../models/entryModels'
import styles from './timelineEntry.module.css'

interface ITimelineEntryProps {
  entry: IEntry
  open: () => void
}

const TimelineEntry: React.FC<ITimelineEntryProps> = ({ entry, open }) => {
  return (
    <div className={styles.entry}>
      <div className={styles.date}>
        {entry.day || entry.month ? (
          dayjs(entry.timestamp).format(`MMM${entry.day ? ' D' : ''}`)
        ) : (
          <span className={styles.dot}>🔴</span>
        )}
      </div>
      <div
        className={clsx(styles.entryBody, (entry.day || entry.month) && styles.hasDate)}
        onClick={open}
        style={{ background: `${entry.color}45` }}
      >
        {entry.category && (
          <span className={styles.category} title={entry.category.description}>
            {entry.category.icon}
          </span>
        )}
        <p>{entry.title}</p>
      </div>
    </div>
  )
}

export default TimelineEntry
