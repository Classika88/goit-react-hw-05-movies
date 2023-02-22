import { useEffect, useState } from 'react';
import { getPopularFilms } from 'services/MoviesApi';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Title } from 'components/MovieLink/MovieLink.styled';
import { Loader } from 'components/Loader/Loader';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const getMovies = async () => {
      try {
        setLoading(true);
        const data = await getPopularFilms();
        setMovies(data);
        setError('');
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getMovies();
  }, []);

  return (
    <>
      {!loading && !error && movies && (
        <div>
          <Title>Trending today:</Title>
          <MoviesList movies={movies} />
        </div>
      )}
      {loading && !error && <Loader />}
    </>
  );
};

export default Home;
