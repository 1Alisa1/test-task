import { useCurrencyDetails } from "../../hooks/useCurrencyDetails";
import styles from "./currencyDetailsTable.module.scss";

interface CurrencyDetailsTableProps {
  currencyId: string;
}

const CurrencyDetailsTable: React.FC<CurrencyDetailsTableProps> = ({currencyId}) => {
  const {loading, response, error} = useCurrencyDetails(currencyId);
  if (error) {
    return <div>Error: Oops... </div>;
  } else if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  } else {
    return (
      <table className={styles.currencyDetailsTable}>
      <thead>
        <tr>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className={styles.key}>
            Most common symbol used to identify this asset on an exchange:
          </td>
          <td className={styles.value}>{response[0].symbol}</td>
        </tr>
        <tr>
          <td className={styles.key}>Available supply for trading:</td>
          <td className={styles.value}>{response[0].supply}</td>
        </tr>
        <tr>
          <td className={styles.key}>Total quantity of asset issued:</td>
          <td className={styles.value}>{response[0].maxSupply}</td>
        </tr>
        <tr>
          <td className={styles.key}>Supply x price:</td>
          <td className={styles.value}>{response[0].marketCapUsd}</td>
        </tr>
        <tr>
          <td className={styles.key}>
            Quantity of trading volume represented in USD over the last 24
            hours:
          </td>
          <td className={styles.value}>{response[0].volumeUsd24Hr}</td>
        </tr>
        <tr>
          <td className={styles.key}>
            Volume-weighted price based on real-time market data, translated to
            USD:
          </td>
          <td className={styles.value}>{response[0].priceUsd}</td>
        </tr>
        <tr>
          <td className={styles.key}>
            The direction and value change in the last 24 hours:
          </td>
          <td className={styles.value}>{response[0].changePercent24Hr}</td>
        </tr>
        <tr>
          <td className={styles.key}>
            Volume Weighted Average Price in the last 24 hours:
          </td>
          <td className={styles.value}>{response[0].vwap24Hr}</td>
        </tr>
      </tbody>
    </table>
    );
  }  
};

export default CurrencyDetailsTable;
