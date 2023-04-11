import { useState } from "react";
import styles from "./porfolioUpdateModalContent.module.scss";
import { usePortfolioContext } from "../../context/context";
import { PortfolioActive } from "../../models/portfolioActive";
import CurrencyItem from "../../models/currencyItem";

interface ModalContentProps {
  currencyItem: CurrencyItem,
  setActive: (value: null) => void;
}

const PorfolioUpdateModalContent: React.FC<ModalContentProps> = ({
  currencyItem,
  setActive,
}) => {
  const [countValue, setCountValue] = useState("");
  const { portfolio, setPortfolio } = usePortfolioContext();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    setPortfolio((prevState) => {
      let portfolioRow: PortfolioActive = {
        name: currencyItem.name,
        amount: countValue,
        initialPrice: currencyItem.priceUsd
      };

      if (prevState.has(currencyItem.id)) {
        const prevPortfolioRow = prevState.get(currencyItem.id);

        if (!prevPortfolioRow) {
          return prevState;
        }

        portfolioRow.amount = (Number(prevPortfolioRow.amount) + Number(portfolioRow.amount)).toString();
        portfolioRow.initialPrice = prevPortfolioRow.initialPrice;
      }

      const newState = new Map(prevState);
      newState.set(currencyItem.id, portfolioRow);

      return newState;
    });

    setActive(null);

    e.preventDefault();
  };
  return (
    <div className={styles.modalContent}>
      <div className={styles.closeBtn} onClick={() => setActive(null)}>
        +
      </div>
      <div className={styles.title}>Add {currencyItem.name}</div>
      <form onSubmit={handleSubmit}>
        <label>
          Amount:
          <input
            type="number"
            maxLength={14}
            value={countValue}
            onChange={(e) => setCountValue(e.target.value)}
          ></input>
        </label>
        <input type="submit" value="Submit" className={styles.submit}></input>
      </form>
    </div>
  );
};

export default PorfolioUpdateModalContent;
