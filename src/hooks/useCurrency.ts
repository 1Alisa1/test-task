import CurrencyItem from "../models/currencyItem";
import { useFetch } from "./useFetch";

export function useCurrency(limit: number, offset: number) {
  let apiUrl = process.env.REACT_APP_API_URL;

  if (!apiUrl) {
    throw Error(`url is undefined`);
  }

  const { loading, response, error } = useFetch<{ data: CurrencyItem[] }>(
    apiUrl + `/assets?limit=${limit}&offset=${offset}`
  );

  let currencies: CurrencyItem[] | null = null;

  if (!error && !loading && response) {
    currencies = response.data;
  }

  return { loading, response: currencies, error };
}
