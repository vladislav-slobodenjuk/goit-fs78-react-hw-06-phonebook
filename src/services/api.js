import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const AUTHORIZATION_BEARER =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmODU0Y2RkODdhYTkwNTNjYTAwMjI5ZmVhNzNlNTkyNSIsInN1YiI6IjYxODZmYWFkZmU2MzE4MDA2NDgzZTdkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vm-UaTyMPJ2HhXiSRvz-VpPqqqKEF-3PBdhfYlg5v3g';

const movieDBInst = axios.create({
  baseURL: BASE_URL,
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${AUTHORIZATION_BEARER}`,
  },
});

export async function getDayTrending() {
  const { data } = await movieDBInst.get('trending/movie/day');
  return data.results;
}

export async function searchById(id, param) {
  const url = param ? `movie/${id}/${param}` : `movie/${id}`;
  const { data } = await movieDBInst.get(url);
  return data;
}

export async function searchByQuery(query) {
  const { data } = await movieDBInst.get('search/movie', { params: { query } });
  return data.results;
}
