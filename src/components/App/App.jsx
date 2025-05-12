import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/HomePage/HomePage';
import s from './App.module.css';
import Header from '../Header/Header';
import { lazy, Suspense } from 'react';
const Movies = lazy(() => import('../../pages/MoviesPage/MoviesPage'));
const MoviesId = lazy(() =>
  import('../../pages/MovieDetailsPage/MovieDetailsPage')
);
const NotFound = lazy(() => import('../../pages/NotFoundPage/NotFoundPage'));
const MovieCast = lazy(() => import('../MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('../MovieReviews/MovieReviews'));

const App = () => {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MoviesId />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default App;
