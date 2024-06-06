import fetchMain from "../axiosConfig";

export async function getPopularMovies() {
  const response = await fetchMain("movie/popular?page=1");
  const data = await response.data.results;
  return data;
}

export async function getTopFiveMovies() {
  let countData = 5;
  const response = await fetchMain("movie/top_rated");
  const data = await response.data.results;
  const resultsData = countData ? data.slice(0, countData) : data;
  return resultsData;
}

export async function getNewsMovies() {
  const response = await fetchMain("discover/movie");
  const data = await response.data.results;
  return data;
}

export async function getTopSeries(){
  const response = await fetchMain("tv/top_rated");
  const data = await response.data.results;
  return data;
}