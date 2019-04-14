import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.iextrading.com/1.0"
});
