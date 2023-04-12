import CurrencyItem from "../../models/currencyItem";
import { PortfolioActive } from "../../models/portfolioActive";
import styles from "./portfolioSatus.module.scss";

interface PortfolioStatusProps {
  portfolio: Map<string, PortfolioActive>;
  currencies: CurrencyItem[];
}
const PortfolioStatus: React.FC<PortfolioStatusProps> = ({
  portfolio,
  currencies,
}) => {
  const portfolioKeys = Array.from(portfolio.keys());

  const currentPrices = new Map(
    portfolioKeys.map((key) => [
      key,
      currencies?.find((el) => el.id === key)?.priceUsd,
    ])
  );

  const initialPortfolioPrice = portfolioKeys
    .map(
      (key) =>
        Number(portfolio.get(key)?.amount) *
        Number(portfolio.get(key)?.initialPrice)
    )
    .reduce((prev, curr) => prev + curr, 0);

  const currentPortfolioPrice = portfolioKeys
    .map(
      (key) =>
        Number(portfolio.get(key)?.amount) * Number(currentPrices.get(key))
    )
    .reduce((prev, curr) => prev + curr, 0);

  const currentPortfolioDifference =
    currentPortfolioPrice - initialPortfolioPrice;

  const currentPortfolioDifferencePercentage =
    (currentPortfolioDifference * 100) / initialPortfolioPrice || 0;

  return (
    <div className={styles.portfolioStatus}>
      <div className={styles.cost}>{currentPortfolioPrice.toFixed(2)} USD</div>
      <div className={styles.difference}>
        {String(currentPortfolioDifference)[0] === "-" ? "" : "+"}
        {currentPortfolioDifference.toFixed(2)}
      </div>
      <div className={styles.percent}>
        ({currentPortfolioDifferencePercentage.toFixed(2)}%)
      </div>
    </div>
  );
};

export default PortfolioStatus;
