import axios from "axios";

const coinGecko = axios.create({
  baseURL: "https://api.coingecko.com/api/v3"
})
  
export default coinGecko;
