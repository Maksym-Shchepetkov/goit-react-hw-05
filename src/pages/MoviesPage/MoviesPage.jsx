import { Field, Form, Formik } from 'formik';
import s from './MoviesPage.module.css';
import MovieList from '../../components/MovieList/MovieList';
import { handleGetSearchData } from '../../services/api';
import { useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useEffect, useState } from 'react';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryValue = searchParams.get('query') || '';
  const [searchMovie, setSearchMovie] = useState([]);

  useEffect(() => {
    if (queryValue !== '') {
      const handleFetchSearch = async () => {
        try {
          const searchResults = await handleGetSearchData(queryValue);

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
  }, [queryValue]);

  const handleSubmit = (values, actions) => {
    const trimmedValue = values.search.trim();

    if (trimmedValue === '') {
      toast.error('Please enter a search term');
      return;
    }

    setSearchParams({ query: trimmedValue });
    actions.resetForm();
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

      <MovieList movies={searchMovie} />
    </div>
  );
};

export default MoviesPage;
