import clsx from 'clsx'
import styles from './modal.module.css'

interface IModalProps {
  isOpen: boolean
  close: () => void
  children: React.ReactNode
}

const Modal: React.FC<IModalProps> = ({ isOpen, close, children }) => {
  if (!isOpen) return null
  return (
    <div className={clsx(styles.root, isOpen && styles.open)}>
      <div className={styles.backdrop} onClick={close}></div>
      <div className={styles.container}>{children}</div>
    </div>
  )
}

export default Modal
