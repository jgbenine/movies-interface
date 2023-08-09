import React, { createContext, useEffect, useState } from 'react'
import fetchMain from "../api/axiosConfig";
export const DataContext = createContext();

export function ContextApi({children}) {
  const [InfoTopMovies, setInfoTopMovies] = useState([]);
  const [InfoNewsMovies, setInfoNewsMovies] = useState([]);


  useEffect(() => {
    async function fetchData(url, setDataCallback) {
      try {
        const response = await fetchMain(url);
        const data = await response.data.results;
        setDataCallback(data);
      } catch (error) {
        console.error("Erro na requisição:", error);
      }
    }

    async function fetchTopMovies() {
      try {
        const response = await fetchMain("/3/movie/top_rated");
        const data = await response.data.results;
        const firstFiveResults = data.slice(0, 5);
        setInfoTopMovies(firstFiveResults);
      } catch (error) {
        console.error("Erro requisição TopFilmes", error);
      }
    }


    fetchData("/3/trending/movie/day", setInfoNewsMovies);
    fetchTopMovies();
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
