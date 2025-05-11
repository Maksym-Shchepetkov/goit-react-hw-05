import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/HomePage/HomePage';
import Movies from '../../pages/MoviesPage/MoviesPage';
import MoviesId from '../../pages/MovieDetailsPage/MovieDetailsPage';
import NotFound from '../../pages/NotFoundPage/NotFoundPage';
import MovieCast from '../MovieCast/MovieCast';
import MovieReviews from '../MovieReviews/MovieReviews';
import {
  handleGetDetails,
  handleGetActors,
  handleGetReviews,
  handleGetSearchData,
} from '../../services/api';
import s from './App.module.css';
import Header from '../Header/Header';
import toast from 'react-hot-toast';
import { useEffect, useState } from 'react';

const App = () => {
  const [info, setInfo] = useState(() => {
    const savedInfo = localStorage.getItem('info');
    return savedInfo ? JSON.parse(savedInfo) : null;
  });
  const [movieInfo, setMovieInfo] = useState(() => {
    const savedMovieInfo = localStorage.getItem('movieInfo');
    return savedMovieInfo ? JSON.parse(savedMovieInfo) : {};
  });
  const [cast, setCast] = useState(() => {
    const savedCast = localStorage.getItem('cast');
    return savedCast ? JSON.parse(savedCast) : [];
  });
  const [survey, setSurvey] = useState(() => {
    const savedSurvey = localStorage.getItem('survey');
    return savedSurvey ? JSON.parse(savedSurvey) : [];
  });

  const [query, setQuery] = useState('');

  const [searchMovie, setSearchMovie] = useState([]);

  useEffect(() => {
    const handleFetchDetails = async () => {
      try {
        if (info === undefined) {
          return;
        }
        const data = await handleGetDetails(info);
        const team = await handleGetActors(info);
        const content = await handleGetReviews(info);

        setMovieInfo(data);
        setCast(team.cast);
        setSurvey(content.results);
      } catch (error) {
        toast.error('Hello World', {
          duration: 4000,
          position: 'top-center',
        });
      }
    };
    handleFetchDetails();
  }, [info]);

  useEffect(() => {
    if (info) {
      localStorage.setItem('info', JSON.stringify(info));
    }
  }, [info]);

  useEffect(() => {
    if (query !== '') {
      const handleFetchSearch = async () => {
        try {
          const searchResults = await handleGetSearchData(query);

          setSearchMovie(searchResults.results);
        } catch (error) {
          toast.error('Hello World', {
            duration: 4000,
            position: 'top-center',
          });
        }
      };
      handleFetchSearch();
    }
  }, [query]);

  useEffect(() => {
    if (movieInfo) {
      localStorage.setItem('movieInfo', JSON.stringify(movieInfo));
    }
  }, [movieInfo]);

  useEffect(() => {
    if (cast) {
      localStorage.setItem('cast', JSON.stringify(cast));
    }
  }, [cast]);

  useEffect(() => {
    if (survey) {
      localStorage.setItem('survey', JSON.stringify(survey));
    }
  }, [survey]);

  const handleOnSubmit = search => {
    setQuery(search);
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home getInfo={setInfo} />} />
        <Route
          path="/movies"
          element={
            <Movies
              submit={handleOnSubmit}
              movies={searchMovie}
              getId={setInfo}
            />
          }
        />
        <Route
          path="/movies/:movieId"
          element={<MoviesId fullInfo={movieInfo} />}
        >
          <Route path="cast" element={<MovieCast actors={cast} />} />
          <Route path="reviews" element={<MovieReviews feedback={survey} />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
