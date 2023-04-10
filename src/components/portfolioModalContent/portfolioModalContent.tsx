import { useState } from "react";
import { Button } from "../button/button";
import styles from "./portfolioModalContent.module.scss";

interface ModalContentProps {
  setActive: (value: boolean) => void;
}

const PorfolioModalContent: React.FC<ModalContentProps> = ({ setActive }) => {

  const [state, setState] = useState([]);

  const handleClick = () => {
    
  };
    
  return (
    <div className={styles.modalContent}>
      <div className={styles.closeBtn} onClick={() => setActive(false)}>
        +
      </div>
      <div className={styles.title}>Your currency</div>
      <div className={styles.currencies}>
        {state.map((item) => (
          <div className={styles.currency}>
            <div className={styles.name}>{}</div>
            <div className={styles.amount}>Amount: {}</div>
            <Button text="Delete" handleClick={() => handleClick()} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PorfolioModalContent;
