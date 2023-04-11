import { usePopularCurrencies } from "../../hooks/usePopularCurrencies";
import styles from "./popularCurrencies.module.scss";

const PopularCurrencies: React.FC = () => {
  const { loading, response, error } = usePopularCurrencies();

  if (error) {
    return <div>Error: Oops... </div>;
  } else if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  } else {
    return (
      <div className={styles.popularCoins}>
        {response &&
          response.map((currency) => (
            <div className={styles.coin}>
              <div className={styles.name}>{currency.name}</div>
              <div className={styles.value}>${Number(currency.priceUsd).toFixed(6)}</div>
            </div>
          ))}
      </div>
    );
  }
};

export default PopularCurrencies;
