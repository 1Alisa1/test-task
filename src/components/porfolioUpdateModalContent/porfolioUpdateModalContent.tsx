import { useEffect, useState } from "react";
import styles from "./porfolioUpdateModalContent.module.scss";
import { usePortfolioContext } from "../../context/context";
import { PortfolioActive } from "../../models/portfolioActive";
import CurrencyItem from "../../models/currencyItem";

interface ModalContentProps {
  currencyItem: CurrencyItem;
  setActive: (value: null) => void;
}

const PorfolioUpdateModalContent: React.FC<ModalContentProps> = ({
  currencyItem,
  setActive,
}) => {
  const [countValue, setCountValue] = useState("");
  const [countValueDirty, setCountValueDirty] = useState(false);
  const [countValueError, setCountValueError] = useState(
    "Field can not be empty"
  );
  const [formValid, setFormValid] = useState(false);
  const { portfolio, setPortfolio } = usePortfolioContext();

  useEffect(() => {
    if (countValueError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [countValueError]);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    setPortfolio((prevState) => {
      let portfolioRow: PortfolioActive = {
        name: currencyItem.name,
        amount: countValue,
        initialPrice: currencyItem.priceUsd,
      };

      if (prevState.has(currencyItem.id)) {
        const prevPortfolioRow = prevState.get(currencyItem.id);

        if (!prevPortfolioRow) {
          return prevState;
        }

        portfolioRow.amount = (
          Number(prevPortfolioRow.amount) + Number(portfolioRow.amount)
        ).toString();
        portfolioRow.initialPrice = prevPortfolioRow.initialPrice;
      }

      const newState = new Map(prevState);
      newState.set(currencyItem.id, portfolioRow);

      return newState;
    });

    setActive(null);

    e.preventDefault();
  };

  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setCountValue(e.target.value);

    if (Number(e.target.value) <= 0) {
      setCountValueError("Value must be greater than 0");
    } else {
      setCountValueError("");
    }
  };

  const blurHandler: React.FocusEventHandler<HTMLInputElement> = (e) => {
    if (e.target.name === "count") {
      setCountValueDirty(true);
    }
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
            name="count"
            type="number"
            maxLength={14}
            value={countValue}
            onChange={(e) => changeHandler(e)}
            onBlur={(e) => blurHandler(e)}
          ></input>
        </label>
        <input
          type="submit"
          value="Submit"
          disabled={!formValid}
          className={styles.submit}
        ></input>
      </form>
      {countValueDirty && countValueError && (
        <div className={styles.error}>{countValueError}</div>
      )}
    </div>
  );
};

export default PorfolioUpdateModalContent;
