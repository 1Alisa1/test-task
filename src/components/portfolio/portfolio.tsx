import styles from "./portfolio.module.scss";
import { useState } from "react";
import { usePortfolioContext } from "../../context/context";
import { useCurrency } from "../../hooks/useCurrency";
import PortfolioStatus from "../portfolioSatus/portfolioStatus";
import Modal from "../modal/modal";
import { Button } from "../button/button";
import PorfolioModalContent from "../portfolioModalContent/portfolioModalContent";

const Portfolio = () => {
  const [portfolioModalActive, setPortfolioModalActive] = useState(false);

  const handleClick = () => {
    setPortfolioModalActive(true);
  };

  const { portfolio, setPortfolio } = usePortfolioContext();
  const { loading, response, error } = useCurrency();

  return (
    <div className={styles.portfolio}>
      <img
        className={styles.icon}
        src="https://cdn-icons-png.flaticon.com/64/2697/2697702.png"
        alt="portfolio"
      ></img>
      {error && <div>Error: Oops... </div>}
      {!error && loading && <div className={styles.loading}>Loading...</div>}
      {!error && !loading && response && (
        <PortfolioStatus portfolio={portfolio} currencies={response} />
      )}
      <Button text="More info" handleClick={handleClick} />
      <Modal
        active={portfolioModalActive}
        setActive={() => setPortfolioModalActive(false)}
      >
        <PorfolioModalContent
          setActive={() => setPortfolioModalActive(false)}
        />
      </Modal>
    </div>
  );
};

export default Portfolio;
