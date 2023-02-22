import MovieLink from 'components/MovieLink/MovieLink';
import propTypes from 'prop-types';

export const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, original_title }) => {
        return <MovieLink key={id} name={original_title} id={id} />;
      })}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: propTypes.array.isRequired,
};
