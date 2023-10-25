'use client';
import React, { createContext, useEffect, useState } from "react";
import fetchMain from "../services/api/axiosConfig";
export const DataContext = createContext();

export function ContextApi({ children }) {
  const [infoTopFiveMovies, setInfoTopFiveMovies] = useState([]);
  const [infoTopMovies, setInfoTopMovies] = useState([]);
  const [infoNewsMovies, setInfoNewsMovies] = useState([]);
  const [infoNewsTv, setInfoNewsTv] = useState([]);
  const [infoGeneralMovies, setInfoGeneralMovies] = useState([]);
  const [infoGeneralSeries, setInfoGeneralSeries] = useState([]);
  const [infoSearch, setInfoSearch] = useState([]);
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState([]);
  const maxDataView = 25;

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

  async function fetchAllDataPages(url, setDataCallback) {
    try {
      let data = [];
      let page = currentPage;

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
    
  useEffect(() => {
    fetchData("/3/movie/popular", setInfoNewsMovies);
    fetchData("/3/tv/top_rated", setInfoNewsTv);
    fetchData("/3/movie/top_rated", setInfoTopFiveMovies, 5);
    fetchData("/3/movie/top_rated", setInfoTopMovies);
    fetchData("/3/discover/movie", setInfoGeneralMovies);
    fetchData("/3/trending/tv/week", setInfoGeneralSeries);
    fetchData(`/3/search/movie?query=${searchQuery}`, setInfoSearch)
  }, [currentPage, searchQuery]);

  return (
    <DataContext.Provider
      value={{
        infoTopFiveMovies,
        infoTopMovies,
        infoNewsMovies,
        infoNewsTv,
        infoGeneralMovies,
        infoGeneralSeries,
        infoSearch,
        currentPage,
        setCurrentPage,
        totalPages,
        fetchAllDataPages,
        setSearchQuery,
        searchQuery
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default ContextApi;
