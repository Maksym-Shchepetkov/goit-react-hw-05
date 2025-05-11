import { Link } from 'react-router-dom';
import s from './MovieItems.module.css';

const MovieItems = ({ location, children, urlTitle }) => {
  return (
    <Link state={location} to={`/movies/${urlTitle}`}>
      {children}
    </Link>
  );
};

export default MovieItems;
