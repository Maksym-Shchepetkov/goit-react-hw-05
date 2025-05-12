import MovieList from '../MovieList/MovieList';
import user from '../../assets/user.svg';
import s from './MovieCast.module.css';
import { handleGetActors } from '../../services/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieCast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const handleFetchDetails = async () => {
      try {
        const team = await handleGetActors(movieId);
        setCast(team.cast);
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
    <ul className={s.ul}>
      {cast?.map(char => {
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
    </ul>
  );
};

export default MovieCast;
