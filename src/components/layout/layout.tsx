import { Outlet } from "react-router-dom";
import styles from "./layout.module.scss";
import { Button } from "../button/button";
import Modal from "../modal/modal";
import { useState } from "react";
import PorfolioModalContent from "../portfolioModalContent/portfolioModalContent";

const Layout: React.FC = () => {
  const coins = [
    { name: "Bitcoin", value: "17193925.00" },
    { name: "Ethereum", value: "101160540.00" },
    { name: "XRP", value: "39299874590.00" },
  ];

  const [portfolioModalActive, setPortfolioModalActive] = useState(false);

  const handleClick = () => {
    setPortfolioModalActive(true);
  };

  return (
    <>
      <header>
        <div className={styles.popularCoins}>
          {coins.map((coin) => (
              <div className={styles.coin}>
                <div className={styles.name}>{coin.name}</div>
                <div className={styles.value}>${coin.value}</div>
              </div>
          ))}
        </div>
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
