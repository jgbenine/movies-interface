import fetchMain from "../api";

export type MovieProps = {
  id: number;
  poster_path: string;
  original_title: string;
  media_type?: string;
  overview: string;
  release_date: string;
  vote_average: number;
};

export type SeriesProps = {
  id: number;
  poster_path: string;
  name: string;
  first_air_date: string;
  vote_average: number;
}

export async function getPopularMovies() {
  try {
    const response = await fetchMain("movie/popular?page=1");
    const data = await response.data.results;
    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function getTopFiveMovies() {
  let countData = 5;
  const response = await fetchMain("movie/top_rated");
  const data = await response.data.results;
  const resultsData = countData ? data.slice(0, countData) : data;
  return resultsData;
}

export async function getNewsMovies(page: number) {
  try {
    const response = await fetchMain(`discover/movie?page=${page}`);
    const data: MovieProps[] = await response.data.results;
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export async function getNewsSeries(page: number) {
  try {
    const response = await fetchMain(`discover/tv?page=${page}`);
    const data:SeriesProps[] = await response.data.results;
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export async function getTopSeries() {
  try {
    const response = await fetchMain("tv/top_rated");
    const data = await response.data.results;
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function getMovieId(id: number) {
  try {
    const response = await fetchMain(`movie/${id}`);
    const data = await response.data;
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function getSerieById(id: number) {
  try {
    const response = await fetchMain(`tv/${id}`);
    const data = await response.data;
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function getSearch(params: string) {
  try {
    const response = await fetchMain(`search/multi?query=${params}`);
    const data = await response.data.results;
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
