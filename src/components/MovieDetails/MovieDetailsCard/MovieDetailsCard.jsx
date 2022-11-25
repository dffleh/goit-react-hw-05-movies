import { Wrap } from '../MovieDetails.styled';
import { Description, Poster } from './MovieDetailsCard.styled';
import noImgFilm from '../../../image/noPoster.png';

export const MovieDetailsCard = ({
  poster_path,
  original_title,
  release_date,
  vote_average,
  overview,
  genres,
}) => {
  const imgSrc = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  return (
    <Wrap>
      <Poster>
        <img
          src={poster_path ? imgSrc : noImgFilm}
          alt={original_title}
          width="360"
        />
      </Poster>
      <Description>
        <h2>
          {original_title} ({release_date.slice(0, 4)})
        </h2>
        <p>User Score: {vote_average.toFixed(1) * 10}%</p>

        <div>
          <h3>Overview</h3>
          <p>{overview}</p>
        </div>
        <div>
          <h3>Genres</h3>
          <p>
            {genres.map(g => {
              return g.name + ' ';
            })}
          </p>
        </div>
      </Description>
    </Wrap>
  );
};
