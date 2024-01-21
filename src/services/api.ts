import axios from "axios";

export const BASE_URL = "https://api.deezer.com/";

export const setupAPIClient = (ctx = undefined) => {
  const api = axios.create({
    baseURL: BASE_URL,
  });

  return api;
};

export const api = setupAPIClient();
