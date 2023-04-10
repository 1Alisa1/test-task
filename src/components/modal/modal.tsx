import Portal from '../portal/portal';
import styles from './modal.module.scss';

interface ModalProps {
  active: boolean;
  setActive: (value: React.SetStateAction<boolean>) => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ active, setActive, children }) => {
  return (
    <Portal wrapperElementId="modal-root">
      <div
        className={`${styles.modalOverlay} ${(active ? styles.active : '')}`}
        onClick={() => setActive(false)}
      >
        <div
          className={styles.modalContent}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </Portal>
  );
};

export default Modal;