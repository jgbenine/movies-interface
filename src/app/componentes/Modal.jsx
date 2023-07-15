import React, { useEffect, useRef, useState } from "react";
import styles from "../css/componentes/Modal.module.scss";
import { X } from "lucide-react";

function Modal({ contentModal, isOpen, onClose, children }) {
  const [modalStyles, setModalStyles] = useState({});
  const modalRef = useRef(null);

  useEffect(() => {
    console.log(isOpen)
    if (isOpen) {
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;

      const top = windowHeight / 2;
      const left = windowWidth / 2;

      const modalStyles = {
        position: "fixed",
        top: `${top}px`,
        left: `${left}px`,
        transform: "translate(-50%, -50%)",
      }
      setModalStyles(modalStyles);
    }

    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        console.log('executou')
        onClose();
      }
      // console.log(modalRef.current)
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={styles.modal}>
      <div className={`${styles.modalWrapper}`} style={modalStyles} ref={modalRef}>
        <button className={styles.modalClose} onClick={onClose}>
          <X color="#090C15" strokeWidth={3} />
        </button>
        {children}
        {contentModal}
      </div>
    </div>
  );
}

export default Modal;
