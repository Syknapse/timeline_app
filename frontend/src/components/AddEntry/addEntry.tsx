import clsx from 'clsx'
import styles from './addEntry.module.css'

interface IAddEntryProps {
  isOpen: boolean
  close: () => void
}

const AddEntry: React.FC<IAddEntryProps> = ({ isOpen, close }) => {
  return (
    <div className={clsx(styles.root, isOpen && styles.open)}>
      <div className={styles.backdrop} onClick={close}></div>
      <div className={styles.modal}> stuff will be here </div>
    </div>
  )
}

export default AddEntry
