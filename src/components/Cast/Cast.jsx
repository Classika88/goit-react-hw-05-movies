import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getActorsById } from 'services/MoviesApi';
import { CastList, CastItem } from './Cast.styled';
import { Notification } from '../Reviews/Reviews.styled';
import { Loader } from 'components/Loader/Loader';

const Cast = () => {
  const [credits, setCredits] = useState([]);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  const [error, setError] = useState('');

  useEffect(() => {
    if (!movieId) return;
    const getCredits = async movieId => {
      try {
        setLoading(true);
        const credits = await getActorsById(movieId);
        setCredits(credits);
        setError('');
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getCredits(movieId);
  }, [movieId]);

  return (
    <>
      {credits.length === 0 && !loading && !error && (
        <Notification>We don't have info about casts</Notification>
      )}
      {credits && !loading && !error && (
        <CastList>
          {credits.map(({ id, name, profile_path }) => {
            return (
              <CastItem key={id}>
                <img src={profile_path} alt={name} width="300" />
                <p>{name}</p>
              </CastItem>
            );
          })}
        </CastList>
      )}
      {loading && !error && <Loader />}
    </>
  );
};

export default Cast;
