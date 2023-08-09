import React, { createContext, useEffect, useState } from 'react'
import fetchMain from "../api/axiosConfig";
export const DataContext = createContext();

export function ContextApi({children}) {
  const [InfoTopMovies, setInfoTopMovies] = useState([]);
  const [InfoNewsMovies, setInfoNewsMovies] = useState([]);


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

    fetchData("/3/movie/top_rated", setInfoTopMovies, 5);
    fetchData("/3/trending/movie/day", setInfoNewsMovies);
  }, []);


  return (
    <DataContext.Provider 
      value={{
        InfoTopMovies,
        InfoNewsMovies
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export default ContextApi
