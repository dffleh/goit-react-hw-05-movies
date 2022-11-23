import React from 'react';
import { useLocation } from 'react-router-dom';

export const FilmCard = ({ posterPath, title, movieId }) => {
  const location = useLocation();
  const filmPosterSrc = `https://image.tmdb.org/t/p/w500/${posterPath}`;
  return (
    <ListItem>
      <Link to={`/movies/${movieId}`} state={{ from: location }}>
        <Poster
          src={posterPath ? filmPosterSrc : noPoster}
          alt={title}
          height="510"
        />
        <Title>{title}</Title>
      </Link>
    </ListItem>
  );
};
