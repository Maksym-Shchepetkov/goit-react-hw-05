import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { handleGetDetails } from '../../services/api';
import { IoIosArrowRoundBack } from 'react-icons/io';
import s from './MovieDetailsPage.module.css';
import { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';

const MovieDetailsPage = ({}) => {
  const location = useLocation();
  const goBackRef = useRef(location.state ?? '/');
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState([]);

  useEffect(() => {
    const handleFetchDetails = async () => {
      try {
        const data = await handleGetDetails(movieId);
        setMovieInfo(data);
      } catch (error) {
        toast.error('Hello World', {
          duration: 4000,
          position: 'top-center',
        });
      }
    };

    handleFetchDetails();
  }, [movieId]);

  return (
    <>
      <div
        className={s.wrapper}
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url(https://image.tmdb.org/t/p/original${movieInfo.backdrop_path})`,
        }}
      >
        <div className={s.container}>
          <Link to={goBackRef.current}>
            <button type="button" className={s.btn}>
              {<IoIosArrowRoundBack />}Go back
            </button>
          </Link>
          <img
            src={`https://image.tmdb.org/t/p/w300${movieInfo.poster_path}`}
            alt={movieInfo.title}
            className={s.poster}
            width={300}
            height={400}
          />
          <h2 className={s.title}>
            {movieInfo.title} ({movieInfo.release_date?.slice(0, 4)})
          </h2>
          <p className={s.score}>
            User score: {Math.round(movieInfo.popularity)}%
          </p>
          <h3 className={s.subTitle}>Overview</h3>
          <p className={s.overview}>{movieInfo.overview}</p>
          <h3 className={s.genres}>Genres</h3>
          <div className={s.genresParWrapper}>
            {movieInfo.genres?.map(text => {
              return (
                <p key={text.id} className={s.genresPar}>
                  {text.name}
                </p>
              );
            })}
          </div>
          <ul className={s.ul}>
            <NavLink to="cast">Cast</NavLink>
            <NavLink to="reviews">Review</NavLink>
          </ul>
        </div>
      </div>
      <div className={s.outlet}>
        <Outlet />
      </div>
    </>
  );
};

export default MovieDetailsPage;
