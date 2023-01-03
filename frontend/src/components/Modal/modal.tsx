import clsx from 'clsx'
import styles from './modal.module.css'

interface IModalProps {
  className?: string
  isOpen: boolean
  close: () => void
  children: React.ReactNode
}

const Modal: React.FC<IModalProps> = ({ className, isOpen, close, children }) => {
  if (!isOpen) return null
  return (
    <div className={clsx(className, styles.root, isOpen && styles.open)}>
      <div className={styles.backdrop} onClick={close}></div>
      <div className={styles.container}>{children}</div>
    </div>
  )
}

export default Modal
