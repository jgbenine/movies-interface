import axios from "axios";

const fetchMain = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YTlmYjdlOTcyOWY0NGYwMjMzZGQ4NzU1MzY3NjNlOCIsInN1YiI6IjY0YzQ1MTYyZWVjNWI1MDBhZDAxODI4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._1lTuL9zuns7ly00h8ps8ICmHxoSBDZZm_Hjv96QnAA'
  },
  params:{
    language: "pt-BR"
  }
})

export default fetchMain;