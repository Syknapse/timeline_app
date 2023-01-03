import { useRef, useEffect } from 'react'
import clsx from 'clsx'
import styles from './modal.module.css'
import { Button } from '../../components'
import { Cross } from '../../icons'

interface IModalProps {
  className?: string
  isOpen: boolean
  close: () => void
  children: React.ReactNode
}

const Modal: React.FC<IModalProps> = ({ className, isOpen, close, children }) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (containerRef.current) containerRef.current.focus()
  }, [])

  if (!isOpen) return null
  return (
    <div className={clsx(className, styles.root, isOpen && styles.open)}>
      <div className={styles.backdrop} onClick={close}>
        <Button
          className={styles.button}
          onClick={e => {
            e?.stopPropagation()
            close()
          }}
        >
          <Cross />
        </Button>
      </div>
      <div className={styles.container} ref={containerRef} tabIndex={-1}>
        {children}
      </div>
    </div>
  )
}

export default Modal
