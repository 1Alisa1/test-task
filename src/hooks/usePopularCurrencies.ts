import CurrencyItem from "../models/currencyItem";
import { useFetch } from "./useFetch";

export function usePopularCurrencies() {
  const { loading, response, error } = useFetch<{ data: CurrencyItem[] }>(
    `https://api.coincap.io/v2/assets?limit=3`
  );

  let currencies: CurrencyItem[] | null = null;

  if (!error && !loading && response) {
    currencies = response.data;
  }

  return { loading, response: currencies, error };
}