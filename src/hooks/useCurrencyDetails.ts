import CurrencyItem from "../models/currencyItem";
import { useFetch } from "./useFetch";

export function useCurrencyDetails(currencyId: CurrencyItem["id"]) {
  const { loading, response, error } = useFetch<{ data: CurrencyItem }>(
    `https://api.coincap.io/v2/assets/${currencyId}`
  );
  let currency: CurrencyItem | null = null;

  if (!error && !loading && response) {
    currency = response.data;
  }

  return { loading, response: currency, error };
}
