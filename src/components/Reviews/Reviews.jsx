import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFilmReviews } from 'API/Fetch';
import { Inform } from './Reviews.styled';
import { Wrap } from 'components/MovieDetails/MovieDetails.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    fetchFilmReviews(movieId)
      .then(setReviews)
      .catch(e => console.log(e.message));
  }, [movieId]);

  return (
    <Wrap>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => {
            const { id, author, content } = review;
            return (
              <li key={id}>
                <h2>Author: {author}</h2>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <Inform>We don't have any reviews for this movie</Inform>
      )}
    </Wrap>
  );
};
export default Reviews;
