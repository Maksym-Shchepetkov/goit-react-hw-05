import MovieList from '../MovieList/MovieList';
import s from './MovieReviews.module.css';

const MovieReviews = ({ feedback }) => {
  return (
    <div>
      <MovieList>
        {feedback.length > 0 ? (
          feedback.map(text => (
            <li key={text.id}>
              <h3>Author: {text.author}</h3>
              <p>{text.content}</p>
            </li>
          ))
        ) : (
          <p>We don't have any reviews for this movie</p>
        )}
      </MovieList>
    </div>
  );
};

export default MovieReviews;
