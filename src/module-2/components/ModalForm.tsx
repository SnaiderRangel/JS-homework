import { useState } from 'react'
import Modal from './Modal'

function ModalForm() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const isEmpty = !title.trim() && !description.trim()

  return (
    <div className="modal-form">
      <input
        type="text"
        placeholder="Modal Title (h2 tag)"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <textarea
        placeholder="Modal Description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button type="button" onClick={() => setIsModalOpen(true)} disabled={isEmpty}>
        Open modal
      </button>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <h2>{title}</h2>
          <p>{description}</p>
        </Modal>
      )}
    </div>
  )
}

export default ModalForm
