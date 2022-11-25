import React, { Suspense, useState, useEffect } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchFilmDetails } from 'API/Fetch';
import { MovieDetailsCard } from './MovieDetailsCard/MovieDetailsCard';
import { Container } from 'components/Movies/Movies.styled';
import { LinkBtn, Wrap } from './MovieDetails.styled';

const MovieDetails = () => {
  const [film, setFilm] = useState({});
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    if (!movieId) return;

    fetchFilmDetails(movieId)
      .then(
        ({
          id,
          poster_path,
          original_title,
          release_date,
          vote_average,
          overview,
          genres,
        }) => {
          setFilm({
            id,
            poster_path,
            original_title,
            release_date,
            vote_average,
            overview,
            genres,
          });
        }
      )
      .catch(e => console.log(e.message));
  }, [movieId]);

  const {
    poster_path,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
  } = film;
  return (
    <Container>
      <Wrap>
        <LinkBtn to={location.state?.from ?? '/'}>Go back</LinkBtn>
      </Wrap>

      {film.id && (
        <MovieDetailsCard
          poster_path={poster_path}
          original_title={original_title ?? 'none'}
          release_date={release_date}
          vote_average={vote_average ?? 0}
          overview={overview ?? 'none'}
          genres={genres ?? [{ id: 1, name: 'none' }]}
        />
      )}
      <Wrap>
        <LinkBtn to="cast" state={{ from: location.state?.from ?? '/' }}>
          Cast
        </LinkBtn>
        <LinkBtn to="reviews" state={{ from: location.state?.from ?? '/' }}>
          Reviews
        </LinkBtn>
      </Wrap>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
export default MovieDetails;
