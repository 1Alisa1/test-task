import styles from "./porfolioUpdateModalContent.module.scss";

interface ModalContentProps {
  name: string;
  setActive: (value: null) => void;
}

const PorfolioUpdateModalContent: React.FC<ModalContentProps> = ({name, setActive}) => {
  const handleSubmit = () => {

  };

  return (
    <div className={styles.modalContent}>
      <div className={styles.closeBtn} onClick={() => setActive(null)}>+</div>
      <div className={styles.title}>Add {name}</div>
      <form onSubmit={handleSubmit}>
        <label>
        Amount:
        <input type="number" maxLength={14}></input>
      </label>
      <input type="submit" value="Submit" className={styles.submit}></input>
      </form>
      
    </div>
  );
}

export default PorfolioUpdateModalContent;