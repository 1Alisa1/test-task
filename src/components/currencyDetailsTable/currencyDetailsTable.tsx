import styles from "./currencyDetailsTable.module.scss";

const CurrencyDetailsTable = () => {
  const values = [
    {
      id: "bitcoin",
      rank: "1",
      symbol: "BTC",
      name: "Bitcoin",
      supply: "17193925.0000000000000000",
      maxSupply: "21000000.0000000000000000",
      marketCapUsd: "119150835874.4699281625807300",
      volumeUsd24Hr: "2927959461.1750323310959460",
      priceUsd: "6929.8217756835584756",
      changePercent24Hr: "-0.8101417214350335",
      vwap24Hr: "7175.0663247679233209",
    },
  ];
  
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
          <td className={styles.value}>{values[0].symbol}</td>
        </tr>
        <tr>
          <td className={styles.key}>Available supply for trading:</td>
          <td className={styles.value}>{values[0].supply}</td>
        </tr>
        <tr>
          <td className={styles.key}>Total quantity of asset issued:</td>
          <td className={styles.value}>{values[0].maxSupply}</td>
        </tr>
        <tr>
          <td className={styles.key}>Supply x price:</td>
          <td className={styles.value}>{values[0].marketCapUsd}</td>
        </tr>
        <tr>
          <td className={styles.key}>
            Quantity of trading volume represented in USD over the last 24
            hours:
          </td>
          <td className={styles.value}>{values[0].volumeUsd24Hr}</td>
        </tr>
        <tr>
          <td className={styles.key}>
            Volume-weighted price based on real-time market data, translated to
            USD:
          </td>
          <td className={styles.value}>{values[0].priceUsd}</td>
        </tr>
        <tr>
          <td className={styles.key}>
            The direction and value change in the last 24 hours:
          </td>
          <td className={styles.value}>{values[0].changePercent24Hr}</td>
        </tr>
        <tr>
          <td className={styles.key}>
            Volume Weighted Average Price in the last 24 hours:
          </td>
          <td className={styles.value}>{values[0].vwap24Hr}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default CurrencyDetailsTable;
