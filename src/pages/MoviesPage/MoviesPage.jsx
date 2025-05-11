import { Field, Form, Formik } from 'formik';
import s from './MoviesPage.module.css';
import MovieList from '../../components/MovieList/MovieList';
import MovieItems from '../../components/MovieItems/MovieItems';
import { useLocation, useSearchParams } from 'react-router-dom';

const MoviesPage = ({ submit, movies, getId, setUrlId }) => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') || '';

  if (query && movies.length === 0) {
    submit(query);
  }

  const handleSubmit = (values, actions) => {
    console.log('handleSubmit виконується', values);
    const trimmedValue = values.search.trim();
    searchParams.set('query', trimmedValue);
    setSearchParams(searchParams);
    submit(trimmedValue);
    console.log('Перед actions.resetForm');
    actions.resetForm();
    console.log('Після actions.resetForm');
  };

  return (
    <div>
      <Formik
        initialValues={{ search: '' }}
        enableReinitialize={true}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className={s.form}>
            <Field type="text" name="search" />
            <button type="submit">Search</button>
          </Form>
        )}
      </Formik>

      <MovieList>
        {movies.map(movie => (
          <li key={movie.id} onClick={() => getId(movie.id)}>
            <MovieItems location={location} setUrlId={setUrlId}>
              {movie.title}
            </MovieItems>
          </li>
        ))}
      </MovieList>
    </div>
  );
};

export default MoviesPage;
