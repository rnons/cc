import { Rate } from "../type/Rate";

// get from ENV on backend
const API_KEY = localStorage.getItem("coinkey");

class ChartStore {
  // https://docs.coinapi.io/#get-specific-rate
  // {
  //   "time": "2017-08-09T14:31:18.3150000Z",
  //   "asset_id_base": "BTC",
  //   "asset_id_quote": "USD",
  //   "rate": 3260.3514321215056208129867667
  // }
  fetchRate(): Promise<Rate> {
    if (API_KEY) {
      return fetch("https://rest.coinapi.io/v1/exchangerate/ETH/USD", {
        headers: {
          "X-CoinAPI-Key": API_KEY
        }
      })
        .then(res => res.json())
        .then(data => ({
          time: new Date(data.time),
          rate: data.rate
        }));
    } else {
      return Promise.reject("key not found");
    }
  }
}

export default new ChartStore();
