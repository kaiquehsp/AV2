import React from 'react';
import styles from './Modal.module.css';
function Modal({ onClose, title, children }) {
  
  
  const handleOverlayClick = (e) => {
   
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modalContent}>
        
        <div className={styles.modalHeader}>
          <h2>{title}</h2>
          <button className={styles.closeButton} onClick={onClose}>
            &times; {}
          </button>
        </div>
        
        {}
        <div className={styles.modalBody}>
          {children}
        </div>

      </div>
    </div>
  );
}

export default Modal;