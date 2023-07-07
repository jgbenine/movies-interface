import React, { useState } from 'react'
import styles from '../css/componentes/Modal.module.scss'
import { X } from 'lucide-react'

function Modal({ contentModal, isOpen, onClose, children }) {


  return (
    <div className={styles.modal}>
      <div className={styles.modalWrapper}>
        <button className={styles.modalClose} onClick={onClose}>
          <X color='#ffff00' strokeWidth={3} />
        </button>
        {children}
        {contentModal}
      </div>
    </div>
  )
}

export default Modal
