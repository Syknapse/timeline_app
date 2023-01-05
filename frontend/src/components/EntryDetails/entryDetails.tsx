import clsx from 'clsx'
import dayjs from 'dayjs'
import { IEntry } from '../../models/entryModels'
import { getTimeFromNow } from '../../utils/dates'
import { Pencil } from '../../icons'
import { Trash } from '../../icons'
import { Button } from '../../components'
import { Modal } from '../../components'
import styles from './entryDetails.module.css'

interface IEntryDetailsProps {
  isOpen: boolean
  entry: IEntry
  close: () => void
  onEdit: () => void
  onDelete: (id: string) => void
}

const EntryDetails: React.FC<IEntryDetailsProps> = ({ isOpen, entry, close, onEdit, onDelete }) => {
  return (
    <Modal isOpen={isOpen} close={close}>
      <div className={styles.rows}>
        <Button className={styles.button} onClick={onEdit}>
          <Pencil />
        </Button>
        <Button className={styles.button} onClick={() => onDelete(entry.id)}>
          <Trash />
        </Button>
      </div>
      <div className={styles.rows}>
        <div>
          <p className={styles.year}>{entry.year}</p>
          <p>{(entry.day || entry.month) && dayjs(entry.timestamp).format(`MMMM${entry.day ? ' D' : ''}`)}</p>
        </div>
        <p>{getTimeFromNow(entry.timestamp)}</p>
      </div>
      <h3 className={clsx(styles.text, styles.title)}>{entry.title}</h3>
      {entry.subtitle && <p className={styles.text}>{entry.subtitle}</p>}
      {entry.description && <div className={clsx(styles.text, styles.description)}>{entry.description}</div>}
      <div className={styles.rows}>
        <p title={entry.category?.description}>Category: {entry.category?.icon}</p>
        <p>Color: {entry.color}</p>
      </div>
    </Modal>
  )
}

export default EntryDetails
