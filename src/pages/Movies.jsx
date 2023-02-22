import React, { useEffect, useState } from 'react';
import SearchBar from 'components/InputForm/InputForm';
import { getSearchFilms } from 'services/MoviesApi';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useSearchParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;
    const getMovies = async () => {
      try {
        setLoading(true);
        const movies = await getSearchFilms(query);

        if (!movies.length) {
          setError('Sorry. There are no movies');
          return;
        }
        setMovies(movies);
        setError('');
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getMovies();
  }, [query]);

  return (
    <div>
      <SearchBar />
      {!loading && !error && movies && <MoviesList movies={movies} />}

      {loading && !error && <Loader />}
    </div>
  );
};

export default Movies;
