import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '63801254b5c460a3de0676d2e1a253d2';

export const getPopularFilms = async () => {
  const params = {
    api_key: API_KEY,
    language: 'en-US',
  };
  const { data } = await axios.get('/trending/movie/day', { params });
  const movies = data.results.map(({ id, original_title }) => ({
    id,
    original_title,
  }));
  return movies;
};

export const getSearchFilms = async query => {
  const params = {
    query,
    api_key: API_KEY,
  };
  const { data } = await axios.get('/search/movie', { params });
  const movies = data.results.map(({ id, original_title }) => ({
    id,
    original_title,
  }));
  return movies;
};

export const getFilmsById = async id => {
  const params = {
    api_key: API_KEY,
    language: 'en-US',
  };
  const { data } = await axios.get(`/movie/${id}`, { params });
  const {
    poster_path,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
  } = data;
  return {
    poster_path: getPoster(poster_path),
    original_title,
    release_date: release_date.slice(0, 4),
    vote_average: vote_average.toFixed(1),
    overview,
    genres: genres.map(({ name }) => name).join(', '),
  };
};

export const getActorsById = async id => {
  const params = {
    api_key: API_KEY,
    language: 'en-US',
  };
  const { data } = await axios.get(`/movie/${id}/credits`, { params });
  const credits = data.cast.map(({ id, name, profile_path }) => ({
    id,
    name,
    profile_path: getPoster(profile_path),
  }));
  return credits;
};

export const getReviewsById = async id => {
  const params = {
    api_key: API_KEY,
    language: 'en-US',
  };
  const { data } = await axios.get(`/movie/${id}/reviews`, { params });
  const reviews = data.results.map(({ id, author, content }) => ({
    id,
    author,
    content,
  }));
  return reviews;
};

const getPoster = url => 'https://image.tmdb.org/t/p/w500' + url;
