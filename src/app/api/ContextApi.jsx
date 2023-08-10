'use client';
import React, { createContext, useEffect, useState } from "react";
import fetchMain from "../api/axiosConfig";
export const DataContext = createContext();

export function ContextApi({ children }) {
  const [infoTopMovies, setInfoTopMovies] = useState([]);
  const [infoNewsMovies, setInfoNewsMovies] = useState([]);
  const [infoNewsTv, setInfoNewsTv] = useState([]);
  const [infoGeneralMovies, setInfoGeneralMovies] = useState([]);
  const [infoGeneralSeries, setInfoGeneralSeries] = useState([]); // Número de filmes por página
  const [allMovies, setAllMovies] = useState([]);
  const [allSeries, setAllSeries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState([]);
  const maxDataView = 24;

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

  async function fetchAllDatasPages(url, setDataCallback) {
    try {
      let data = [];
      let page = 1;

      while (data.length < maxDataView * currentPage) {
        const response = await fetchMain(`${url}?page=${page}`);
        data = data.concat(response.data.results);
        page++;
      }

      const indexOfLastData = currentPage * maxDataView;
      const indexOfFirstData = indexOfLastData - maxDataView;
      const currentData = data.slice(indexOfFirstData, indexOfLastData);

      setTotalPages(Math.ceil(data.length / maxDataView));
      setDataCallback(currentData);
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
  }

  const getCurrentPageData = () => {
    const indexOfLastData = currentPage * maxDataView;
    const indexOfFirstData = indexOfLastData - maxDataView;
    return allMovies.slice(indexOfFirstData, indexOfLastData);
  };

  useEffect(() => {
    fetchData("/3/movie/popular", setInfoNewsMovies);
    fetchData("/3/tv/top_rated", setInfoNewsTv);
    fetchData("/3/movie/top_rated", setInfoTopMovies, 5);
    fetchData("/3/discover/movie", setInfoGeneralMovies);
    fetchData("/3/trending/tv/week", setInfoGeneralSeries);
    fetchAllDatasPages("/3/discover/movie", setAllMovies);
    fetchAllDatasPages("/3/discover/tv", setAllSeries);
  }, [currentPage]);

  return (
    <DataContext.Provider
      value={{
        infoTopMovies,
        infoNewsMovies,
        infoNewsTv,
        infoGeneralMovies,
        infoGeneralSeries,
        allMovies,
        allSeries,
        currentPage,
        setCurrentPage,
        getCurrentPageData,
        totalPages,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default ContextApi;
