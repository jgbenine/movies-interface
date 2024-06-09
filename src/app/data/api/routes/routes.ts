import fetchMain from "../apiConfig";

export async function getPopularMovies() {
  try{
    const response = await fetchMain("movie/popular?page=1");
    const data = await response.data.results;
    return data;
  }catch(err){
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

export async function getNewsMovies() {
   try{
    const response = await fetchMain("discover/movie");
    const data = await response.data.results;
    return data;
   }catch(err){
      console.error(err);
   }
}

export async function getNewsSeries() {
  try{
    const response = await fetchMain("discover/tv");
    const data = await response.data.results;
    return data;
  }catch(err){console.error(err);}
}

export async function getTopSeries() {
  try{
    const response = await fetchMain("tv/top_rated");
    const data = await response.data.results;
    return data;
  }
  catch (err) {
    console.log(err);
  }
}

export async function getMovieId(id: number) {
  try {
    const response = await fetchMain(`movie/${id}`);
    const data = await response.data;
    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function getSerieById(id: number) {
  try {
    const response = await fetchMain(`tv/${id}`);
    const data = await response.data;
    return data;
  } catch (err) {
    console.log(err);
  }
}
