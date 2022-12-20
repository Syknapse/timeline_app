import { IEntry } from '@models/entryModel'
import { Button } from '../../components'
import { Modal } from '../../components'
import styles from './entryDetails.module.css'

interface IEntryDetailsProps {
  isOpen: boolean
  entry: IEntry
  close: () => void
}

const EntryDetails: React.FC<IEntryDetailsProps> = ({ isOpen, entry, close }) => {
  return (
    <Modal isOpen={isOpen} close={close}>
      <Button>Edit</Button>
      <div>Time Since: __</div>
      <div>{entry.year}</div>
      <div>{entry.title}</div>
      <div>{entry.subtitle}</div>
      <div>{entry.description}</div>
      <div>{entry.type}</div>
    </Modal>
  )
}

export default EntryDetails
