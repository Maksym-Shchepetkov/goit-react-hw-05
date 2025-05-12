import { useEffect, useState } from 'react';
import handleGetData from '../../services/api';
import MovieList from '../../components/MovieList/MovieList';
import s from './HomePage.module.css';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

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
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
