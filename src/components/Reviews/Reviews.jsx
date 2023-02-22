import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsById } from 'services/MoviesApi';
import { Author, Content, Notification } from './Reviews.styled';
import { Loader } from 'components/Loader/Loader';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  const [error, setError] = useState('');

  useEffect(() => {
    if (!movieId) return;
    const getReviews = async movieId => {
      try {
        setLoading(true);
        const reviews = await getReviewsById(movieId);
        setReviews(reviews);
        setError('');
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getReviews(movieId);
  }, [movieId]);

  return (
    <>
      {reviews.length === 0 && (
        <Notification>We don't have reviews about this movie</Notification>
      )}
      {!loading && !error && reviews && (
        <ul>
          {reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <Author>Author: {author}</Author>
                <Content>{content}</Content>
              </li>
            );
          })}
        </ul>
      )}
      {loading && !error && <Loader />}
    </>
  );
};

export default Reviews;
