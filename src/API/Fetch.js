import axios from 'axios';
export async function fetchPopularFilms() {
  const url =
    'https://api.themoviedb.org/3/trending/all/day?api_key=97c2f5e78e10e2e692a512d9b4d0312c';
  const resp = await axios.get(url);
  const data = await resp.data;
  const filmsArr = await data.results;

  return filmsArr;
}

export async function fetchFilmsByQuery(searchQuery) {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=97c2f5e78e10e2e692a512d9b4d0312c&language=en-US&query=${searchQuery}&page=1&include_adult=false`;
  const resp = await axios.get(url);
  const data = await resp.data;
  const filmsArr = await data.results;

  return { filmsArr, data };
}

export async function fetchFilmDetails(id) {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=97c2f5e78e10e2e692a512d9b4d0312c&language=en-US`;
  const resp = await axios.get(url);
  const data = await resp.data;

  return data;
}

export async function fetchFilmReviews(id) {
  const url = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=97c2f5e78e10e2e692a512d9b4d0312c&language=en-US&page=1`;
  const resp = await axios.get(url);
  const data = await resp.data;
  const filmsArr = await data.results;

  return filmsArr;
}

export async function fetchFilmCast(movieId) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=97c2f5e78e10e2e692a512d9b4d0312c&language=en-US`;
  const resp = await axios.get(url);
  const data = await resp.data;
  const filmCast = await data.cast;
  return filmCast;
}
