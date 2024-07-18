import './MovieList.scss';
import { MovieCard } from '../MovieCard/MovieCard';

export const MovieList = ({ moviesFromServer }) => (
  <>
    {moviesFromServer.map(movie => (
      <MovieCard movie={movie} key={movie.imdbId} />
    ))}
  </>
);
