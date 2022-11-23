import { useState, useEffect } from 'react';
import { fetchPopularFilms } from 'API/Fetch';

const Home = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetchPopularFilms()
      .then(setFilms)
      .catch(e => console.log(e.message));
  }, []);

  return (
    <List>
      {films.map(film => {
        const { id, poster_path, title, name } = film;
        return (
          <FilmCard
            key={id}
            posterPath={poster_path}
            title={title ?? name}
            movieId={id}
          />
        );
      })}
    </List>
  );
};
export default Home;
