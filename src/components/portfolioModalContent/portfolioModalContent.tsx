import { Button } from "../button/button";
import styles from "./portfolioModalContent.module.scss";
import { usePortfolioContext } from "../../context/context";

interface ModalContentProps {
  setActive: (value: boolean) => void;
}

const PorfolioModalContent: React.FC<ModalContentProps> = ({ setActive }) => {

  const {portfolio, setPortfolio} = usePortfolioContext();

  const handleDeleteClick = (id: string) => {
    setPortfolio(prevState => {
      const newState = new Map(prevState);
      newState.delete(id);
      return newState;
    })
  };

  const keys = Array.from(portfolio.keys());

  return (
    <div className={styles.modalContent}>
      <div className={styles.closeBtn} onClick={() => setActive(false)}>
        +
      </div>
      <div className={styles.title}>Your currency</div>
      <div className={styles.currencies}>
        {keys.map((id) => (
          <div className={styles.currency} key={id}>
            <div className={styles.name}>{id}</div>
            <div className={styles.amount}>Amount: {portfolio.get(id)?.amount}</div>
            <Button text="Delete" handleClick={() => handleDeleteClick(id)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PorfolioModalContent;
