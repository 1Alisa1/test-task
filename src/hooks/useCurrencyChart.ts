import Chart from "../models/currencyChart";
import { useFetch } from "./useFetch";

export function useCurrencyChart(currencyId: string) {
  let apiUrl = process.env.REACT_APP_API_URL;

  if (!apiUrl) {
    throw Error(`url is undefined`);
  }
  
  const { loading, response, error } = useFetch<{ data: Chart[] }>(
    apiUrl +  `/assets/${currencyId}/history?interval=d1`
  );

  let data: Chart[] | null = null;

  if (!error && !loading && response) {
    data = response.data;
  }

  return { loading, response: data, error };
}
