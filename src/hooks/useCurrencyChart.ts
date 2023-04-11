import Chart from "../models/currencyChart";
import { useFetch } from "./useFetch";

export function useCurrencyChart(currencyId: string) {
  const { loading, response, error } = useFetch<{ data: Chart[] }>(
    `https://api.coincap.io/v2/assets/${currencyId}/history?interval=d1`
  );

  let data: Chart[] | null = null;

  if (!error && !loading && response) {
    data = response.data;
  }

  return { loading, response: data, error };
}
