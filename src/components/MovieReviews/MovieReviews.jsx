import { useEffect, useState } from 'react';
import { handleGetReviews } from '../../services/api';
import s from './MovieReviews.module.css';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

const MovieReviews = () => {
  const [survey, setSurvey] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const handleFetchDetails = async () => {
      try {
        if (movieId === undefined) {
          return;
        }
        const content = await handleGetReviews(movieId);

        setSurvey(content.results);
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
    <ul>
      {survey.length > 0 ? (
        survey.map(text => (
          <li key={text.id}>
            <h3>Author: {text.author}</h3>
            <p>{text.content}</p>
          </li>
        ))
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </ul>
  );
};

export default MovieReviews;
