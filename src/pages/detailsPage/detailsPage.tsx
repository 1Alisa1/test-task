import Chart from "../../components/chart/chart";
import CurrencyDetailsTable from "../../components/currencyDetailsTable/currencyDetailsTable";
import styles from "./detailsPage.module.scss";

const DetailsPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Details</div>
      <CurrencyDetailsTable />
      <Chart />
    </div>  
  );
};

export { DetailsPage };