import { useEffect, useState } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { getFilmsById } from 'services/MoviesApi';
import { Details } from 'components/MovieDetails/MovieDetails';
import {
  ButtonBack,
  DetailsTitle,
  InfoLink,
} from 'components/MovieDetails/MovieDetails.styled';
import { Loader } from 'components/Loader/Loader';

const MoviesDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const [error, setError] = useState('');

  const backLink = location.state?.from;

  useEffect(() => {
    if (!movieId) return;
    const getMovieById = async movieId => {
      try {
        setLoading(true);
        const movieDetails = await getFilmsById(movieId);

        setMovieDetails(movieDetails);
        setError('');
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getMovieById(movieId);
  }, [movieId]);

  return (
    <>
      {movieDetails && !loading && !error && (
        <div>
          <ButtonBack to={backLink}>Go back</ButtonBack>
          <Details movieDetails={movieDetails} />
          <div>
            <DetailsTitle>Additional information</DetailsTitle>

            <InfoLink to="cast" state={{ from: backLink }}>
              Cast
            </InfoLink>
            <InfoLink to="reviews" state={{ from: backLink }}>
              Reviews
            </InfoLink>

            <Outlet />
          </div>
        </div>
      )}
      {loading && !error && <Loader />}
    </>
  );
};

export default MoviesDetails;
