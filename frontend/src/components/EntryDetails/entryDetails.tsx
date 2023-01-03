import clsx from 'clsx'
import { IEntry } from '@models/entryModel'
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
        <div className={styles.year}>{entry.year}</div>
        <div>Time Since: __</div>
      </div>
      <h3 className={clsx(styles.text, styles.title)}>{entry.title}</h3>
      {entry.subtitle && <p className={styles.text}>{entry.subtitle}</p>}
      {entry.description && <div className={clsx(styles.text, styles.description)}>{entry.description}</div>}
      <div className={styles.rows}>
        <div>Type: {entry.type}</div>
        <div>Color: {entry.color}</div>
      </div>
    </Modal>
  )
}

export default EntryDetails
