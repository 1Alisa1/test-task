import { Outlet } from "react-router-dom";
import styles from "./layout.module.scss";
import PopularCurrencies from "../popularCurrencies/popularCurrencies";
import Portfolio from "../portfolio/portfolio";

const Layout: React.FC = () => {
  return (
    <>
      <header className={styles.header}>
        <PopularCurrencies />
        <Portfolio />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export { Layout };
