import { useEffect, type ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface ModalProps {
  onClose: () => void
  children: ReactNode
}

function Modal({ onClose, children }: ModalProps) {
  // block page scroll while the modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  return createPortal(
    <div className="modal-overlay">
      <div className="modal" role="dialog" aria-modal="true">
        {children}
        <button type="button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>,
    document.body,
  )
}

export default Modal
