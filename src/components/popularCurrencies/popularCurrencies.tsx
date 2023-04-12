import { usePopularCurrencies } from "../../hooks/usePopularCurrencies";
import Loading from "../loading/loading";
import Error from "../error/error";
import styles from "./popularCurrencies.module.scss";

const PopularCurrencies: React.FC = () => {
  const { loading, response, error } = usePopularCurrencies();

  if (error) {
    return <Error />;
  } else if (loading) {
    return <Loading />;
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
