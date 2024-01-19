import axios from "axios";

export const setupAPIClient = (ctx = undefined) => {
  const api = axios.create({
    baseURL: "https://api.deezer.com/",
  });

  return api;
};

export const api = setupAPIClient();
