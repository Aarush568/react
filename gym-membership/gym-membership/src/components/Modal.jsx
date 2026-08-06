import { useEffect } from 'react'
import { CloseIcon } from './Icons'
import './Modal.css'

function Modal({ onClose, labelledBy, children }) {
  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = overflow
    }
  }, [onClose])

  return (
    <div
      className="modal-overlay"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="modal-dialog" role="dialog" aria-modal="true" aria-labelledby={labelledBy}>
        <button type="button" className="modal-close" aria-label="Close" onClick={onClose}>
          <CloseIcon width={18} height={18} />
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal
