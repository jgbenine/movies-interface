import React, { createContext, useEffect, useState } from "react";

import fetchMain from "../api/axiosConfig";
export const DataContext = createContext();

export function ContextApi({ children}) {
  const [infoTopMovies, setInfoTopMovies] = useState([]);
  const [infoNewsMovies, setInfoNewsMovies] = useState([]);
  const [infoNewsTv, setInfoNewsTv] = useState([]);

  useEffect(() => {
    async function fetchData(url, setDataCallback, countData) {
        try {
          const response = await fetchMain(url);
          const data = await response.data.results;
          const resultsData = countData ? data.slice(0, countData) : data;
          setDataCallback(resultsData);
        } catch (error) {
          console.error("Erro na requisição:", error);
        }
    }
    fetchData("/3/trending/movie/day", setInfoNewsMovies);
    fetchData("/3/trending/tv/week", setInfoNewsTv);
    fetchData("/3/movie/top_rated", setInfoTopMovies, 5);

  }, []);

  return (
    <DataContext.Provider
      value={{
        infoTopMovies,
        infoNewsMovies,
        infoNewsTv,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default ContextApi;
