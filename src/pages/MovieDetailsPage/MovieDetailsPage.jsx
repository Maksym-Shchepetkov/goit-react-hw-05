import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { IoIosArrowRoundBack } from 'react-icons/io';
import s from './MovieDetailsPage.module.css';
import { useRef } from 'react';

const MovieDetailsPage = ({ fullInfo }) => {
  const location = useLocation();
  const goBackRef = useRef(location.state);

  return (
    <>
      <div
        className={s.wrapper}
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url(https://image.tmdb.org/t/p/original${fullInfo.backdrop_path})`,
        }}
      >
        <div className={s.container}>
          <Link to={goBackRef.current}>
            <button type="button" className={s.btn}>
              {<IoIosArrowRoundBack />}Go back
            </button>
          </Link>
          <img
            src={`https://image.tmdb.org/t/p/w300${fullInfo.poster_path}`}
            alt={fullInfo.title}
            className={s.poster}
            width={300}
            height={400}
          />
          <h2 className={s.title}>
            {fullInfo.title} ({fullInfo.release_date?.slice(0, 4)})
          </h2>
          <p className={s.score}>
            User score: {Math.round(fullInfo.popularity)}%
          </p>
          <h3 className={s.subTitle}>Overview</h3>
          <p className={s.overview}>{fullInfo.overview}</p>
          <h3 className={s.genres}>Genres</h3>
          <div className={s.genresParWrapper}>
            {fullInfo.genres?.map(text => {
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
