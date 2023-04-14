import CurrencyItem from "../models/currencyItem";
import { useFetch } from "./useFetch";

export function useCurrencyDetails(currencyId: CurrencyItem["id"]) {
  let apiUrl = process.env.REACT_APP_API_URL;

  if (!apiUrl) {
    throw Error(`url is undefined`);
  }

  const { loading, response, error } = useFetch<{ data: CurrencyItem }>(
    apiUrl + `/assets/${currencyId}`
  );
  let currency: CurrencyItem | null = null;

  if (!error && !loading && response) {
    currency = response.data;
  }

  return { loading, response: currency, error };
}
