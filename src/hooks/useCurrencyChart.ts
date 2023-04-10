import Chart from "../models/currencyChart";
import { useFetch } from "./useFetch";

const data: Chart[] = [
    {
      priceUsd: "6379.3997635993342453",
      time: 1530403200000,
    },
    {
      priceUsd: "6466.3135622762295280",
      time: 1530489600000,
    },
    {
      priceUsd: "6601.0724971279524219",
      time: 1530576000000,
    },
    {
      priceUsd: "6581.0092630267574887",
      time: 1530662400000,
    },
    {
      priceUsd: "6629.1362927171773870",
      time: 1530748800000,
    },
    {
      priceUsd: "6549.1112450806328349",
      time: 1530835200000,
    },
    {
      priceUsd: "6655.9108972488685303",
      time: 1530921600000,
    },
    {
      priceUsd: "6818.2081672225807333",
      time: 1531008000000,
    },
    {
      priceUsd: "6741.7764822044089258",
      time: 1531094400000,
    },
    {
      priceUsd: "6525.5093638185088059",
      time: 1531180800000,
    },
    {
      priceUsd: "6585.4814995139912926",
      time: 1531267200000,
    },
    {
      priceUsd: "6489.0484273708415619",
      time: 1531353600000,
    },
    {
      priceUsd: "6291.0146998844553630",
      time: 1531440000000,
    },
    {
      priceUsd: "6252.1208882488125434",
      time: 1531526400000,
    },
    {
      priceUsd: "6340.1868649492544957",
      time: 1531612800000,
    },
    {
      priceUsd: "6530.5736788831891429",
      time: 1531699200000,
    },
    {
      priceUsd: "6884.5482398003929297",
      time: 1531785600000,
    },
    {
      priceUsd: "7409.9979715905945494",
      time: 1531872000000,
    },
    {
      priceUsd: "7395.3701986813659323",
      time: 1531958400000,
    },
    {
      priceUsd: "7425.9746148291378074",
      time: 1532044800000,
    },
    {
      priceUsd: "7346.6049106335193051",
      time: 1532131200000,
    },
    {
      priceUsd: "7446.3683595137795620",
      time: 1532217600000,
    },
    {
      priceUsd: "7672.2795468901929951",
      time: 1532304000000,
    },
    {
      priceUsd: "8058.3217339088221456",
      time: 1532390400000,
    },
    {
      priceUsd: "8232.6844834113199475",
      time: 1532476800000,
    },
    {
      priceUsd: "8171.3690575620503343",
      time: 1532563200000,
    },
    {
      priceUsd: "8004.3080625949240423",
      time: 1532649600000,
    },
    {
      priceUsd: "8158.6671323110608870",
      time: 1532736000000,
    },
    {
      priceUsd: "8183.3394012885138213",
      time: 1532822400000,
    },
    {
      priceUsd: "8121.8084601148850521",
      time: 1532908800000,
    },
    {
      priceUsd: "7907.5242567350601721",
      time: 1532995200000,
    },
    {
      priceUsd: "7564.2783199263660926",
      time: 1533081600000,
    },
    {
      priceUsd: "7581.6106106966728131",
      time: 1533168000000,
    },
    {
      priceUsd: "7389.6890782016167515",
      time: 1533254400000,
    },
    {
      priceUsd: "7247.2622645760407444",
      time: 1533340800000,
    },
    {
      priceUsd: "6987.2119251945676799",
      time: 1533427200000,
    },
];

export function useCurrencyChart(currencyId: string) {
  //const { loading, response, error } = useFetch<Chart[]>(
  //  `https://api.coincap.io/v2/assets/${currencyId}/history?interval=d1`
  //);

  let loading = false;
  let response = data;
  let error = null;


  return { loading, response: response, error };
}