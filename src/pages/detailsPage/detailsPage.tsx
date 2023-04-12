import { useNavigate, useParams } from "react-router-dom";
import Chart from "../../components/chart/chart";
import CurrencyDetailsTable from "../../components/currencyDetailsTable/currencyDetailsTable";
import styles from "./detailsPage.module.scss";
import { Button } from "../../components/button/button";

const DetailsPage: React.FC = () => {
  const {currencyId} = useParams();
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.title}>Details</div>
      <Button text="Go back" handleClick={() => navigate(-1)}/>
      <CurrencyDetailsTable currencyId={currencyId ?? ""}/>
      <Chart currencyId={currencyId ?? ""}/>
    </div>  
  );
};

export { DetailsPage };