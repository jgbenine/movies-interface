'use client'
import React, { createContext, useEffect, useState } from "react";
import fetchMain from "../api/axiosConfig";
export const DataContext = createContext();

export function ContextApi({ children}) {
  const [infoTopMovies, setInfoTopMovies] = useState([]);
  const [infoNewsMovies, setInfoNewsMovies] = useState([]);
  const [infoNewsTv, setInfoNewsTv] = useState([]);
  const [infoGeneralMovies, setInfoGeneralMovies] = useState([]);
  const [infoGeneralSeries, setInfoGeneralSeries] = useState([]);// Número de filmes por página


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
    fetchData("/3/movie/popular", setInfoNewsMovies);
    fetchData("/3/tv/top_rated", setInfoNewsTv);
    fetchData("/3/movie/top_rated", setInfoTopMovies, 5);
    fetchData("/3/discover/movie", setInfoGeneralMovies);
    fetchData("/3/trending/tv/week", setInfoGeneralSeries);
  }, []);

  function calculatePaginationInfo(data, currentPage, moviesPerPage) {
    const totalPages = Math.ceil(data.length / moviesPerPage);
    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentMovies = data.slice(indexOfFirstMovie, indexOfLastMovie);
  
    return {
      totalPages,
      currentMovies
    };
  }

  return (
    <DataContext.Provider
      value={{
        infoTopMovies,
        infoNewsMovies,
        infoNewsTv,
        infoGeneralMovies,
        infoGeneralSeries,

      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default ContextApi;
