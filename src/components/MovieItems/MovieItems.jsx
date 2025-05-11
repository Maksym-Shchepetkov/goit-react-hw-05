import { Link } from 'react-router-dom';
import s from './MovieItems.module.css';

const MovieItems = ({ location, children, setUrlId }) => {
  return (
    <Link state={location} to={`/movies/${setUrlId}`}>
      {children}
    </Link>
  );
};

export default MovieItems;
