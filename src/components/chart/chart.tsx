import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import styles from "./chart.module.scss";
import { useCurrencyChart } from "../../hooks/useCurrencyChart";

interface ChartProps {
  currencyId: string;
}

const Chart: React.FC<ChartProps> = ({ currencyId }) => {
  const { loading, response, error } = useCurrencyChart(currencyId);

  if (error) {
    return <div>Error: Oops... </div>;
  } else if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  } else {
    return (
      <div className={styles.chart}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={response ? response.map((chart) => ({
              priceUsd: chart.priceUsd,
              time: new Date(chart.time).toLocaleDateString(),
            })) : undefined}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="priceUsd"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
};

export default Chart;
