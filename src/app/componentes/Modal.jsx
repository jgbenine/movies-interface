import React from 'react'
import styles from '../css/componentes/Modal.module.scss'
import { X } from 'lucide-react'

function Modal({ contentModal }) {
  return (
    <div className={styles.modal}>
      <div className={styles.modalWrapper}>
        <X color='#ffff00' strokeWidth={3}/>
        {contentModal}
      </div>
    </div>
  )
}

export default Modal
