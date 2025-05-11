import MovieList from '../MovieList/MovieList';
import user from '../../assets/user.svg';
import s from './MovieCast.module.css';

const MovieCast = ({ actors }) => {
  return (
    <MovieList>
      {actors.map(char => {
        return (
          <li key={char.cast_id}>
            {
              <img
                src={
                  char.profile_path
                    ? `https://image.tmdb.org/t/p/w200${char.profile_path}`
                    : user
                }
                alt={char.original_name}
              />
            }
            <h3>Role</h3>
            <p className={s.rolePar}>{char.character}</p>
            <h4>Name</h4>
            <p>{char.original_name}</p>
          </li>
        );
      })}
    </MovieList>
  );
};

export default MovieCast;
