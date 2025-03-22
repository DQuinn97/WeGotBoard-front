import styles from "../css_modules/modal.module.css";
import { useState } from "react";

interface ModalProps {
  imgSrc: string;
  imgAlt: string;
}

const Modal: React.FC<ModalProps> = ({ imgSrc, imgAlt }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <img
        src={imgSrc}
        alt={imgAlt}
        onClick={openModal}
        className={styles.thumbnail}
      />

      {isModalOpen && (
        <div className={styles.modal} onClick={closeModal}>
          <div
            className={styles.modalContentWrapper}
            onClick={(e) => e.stopPropagation()}
          >
            <span className={styles.close} onClick={closeModal}>
              &times;
            </span>
            <img className={styles.modalContent} src={imgSrc} alt={imgAlt} />
            <div id="caption">{imgAlt}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
