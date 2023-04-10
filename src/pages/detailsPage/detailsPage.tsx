import { useParams } from "react-router-dom";
import Chart from "../../components/chart/chart";
import CurrencyDetailsTable from "../../components/currencyDetailsTable/currencyDetailsTable";
import styles from "./detailsPage.module.scss";

const DetailsPage: React.FC = () => {
  const {currencyId} = useParams();
  return (
    <div className={styles.container}>
      <div className={styles.title}>Details</div>
      <CurrencyDetailsTable currencyId={currencyId ?? ""}/>
      <Chart currencyId={currencyId ?? ""}/>
    </div>  
  );
};

export { DetailsPage };