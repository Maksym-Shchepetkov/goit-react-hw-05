import { Link, useLocation } from 'react-router-dom';
import s from './MovieList.module.css';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={s.list}>
      {movies?.map(movie => {
        return (
          <li key={movie.id} onClick={() => movie.id}>
            <Link state={location} to={`/movies/${movie.id}`}>
              {movie.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
