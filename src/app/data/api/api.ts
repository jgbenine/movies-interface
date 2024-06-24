import axios from "axios";

const fetchMain = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.API_TOKEN}`,
  },
  params: {
    language: "pt-BR",
  },
});

export default fetchMain;
