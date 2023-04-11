import { Outlet } from "react-router-dom";
import styles from "./layout.module.scss";
import { Button } from "../button/button";
import Modal from "../modal/modal";
import { useState } from "react";
import PorfolioModalContent from "../portfolioModalContent/portfolioModalContent";
import PopularCurrencies from "../popularCurrencies/popularCurrencies";

const Layout: React.FC = () => {

  const [portfolioModalActive, setPortfolioModalActive] = useState(false);

  const handleClick = () => {
    setPortfolioModalActive(true);
  };

  return (
    <>
      <header>
        <PopularCurrencies />
        <div className={styles.portfolio}>
          <img className={styles.icon} src="https://cdn-icons-png.flaticon.com/64/2697/2697702.png" alt="portfolio"></img>
          <div className={styles.cost}>134,32 USD</div>
          <div className={styles.difference}>+2,38</div>
          <div className={styles.percent}>(1.80%)</div>
          <Button text="More info" handleClick={handleClick}/>
          <Modal active={portfolioModalActive} setActive={() => setPortfolioModalActive(false)}>
            <PorfolioModalContent setActive={() => setPortfolioModalActive(false)}/>
          </Modal>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export { Layout };
