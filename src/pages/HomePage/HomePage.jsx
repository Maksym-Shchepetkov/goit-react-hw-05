import { useEffect, useState } from 'react';
import handleGetData from '../../services/api';
import MovieList from '../../components/MovieList/MovieList';
import s from './HomePage.module.css';
import MovieItems from '../../components/MovieItems/MovieItems';
import { useLocation } from 'react-router-dom';

const HomePage = ({ getInfo }) => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const handleFetchData = async () => {
      try {
        const data = await handleGetData();

        setMovies(data.results);
      } catch (error) {
        toast.error('Hello World', {
          duration: 4000,
          position: 'top-center',
        });
      } finally {
      }
    };
    handleFetchData();
  }, []);
  return (
    <div className={s.home}>
      <MovieList>
        {movies.map(movie => {
          return (
            <li key={movie.id} onClick={() => getInfo(movie.id)}>
              <MovieItems location={location} urlTitle={movie.title}>
                {movie.title}
              </MovieItems>
            </li>
          );
        })}
      </MovieList>
    </div>
  );
};

export default HomePage;
