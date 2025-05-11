import axios from 'axios';

const handleGetData = async () => {
  const selectedMovies = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day',
    {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzA5ZTg1YTk4YzQzYmE2YWMxNTZlMTc5ODQ1ZDRiYSIsIm5iZiI6MTc0NTc1MjIxMy42MjcsInN1YiI6IjY4MGUxMDk1NzFkZWRjYjhhY2VhZTRlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kz39xg4g3fvvIw0eFxnRKTRFYDqcNXs0fc8Up--4Gc8',
      },
    }
  );
  return selectedMovies.data;
};

export default handleGetData;

export const handleGetDetails = async info => {
  const options = {
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzA5ZTg1YTk4YzQzYmE2YWMxNTZlMTc5ODQ1ZDRiYSIsIm5iZiI6MTc0NTc1MjIxMy42MjcsInN1YiI6IjY4MGUxMDk1NzFkZWRjYjhhY2VhZTRlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kz39xg4g3fvvIw0eFxnRKTRFYDqcNXs0fc8Up--4Gc8',
    },
  };

  const totalInfo = await axios.get(
    `https://api.themoviedb.org/3/movie/${info}`,
    options
  );
  return totalInfo.data;
};

export const handleGetActors = async info => {
  const options = {
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzA5ZTg1YTk4YzQzYmE2YWMxNTZlMTc5ODQ1ZDRiYSIsIm5iZiI6MTc0NTc1MjIxMy42MjcsInN1YiI6IjY4MGUxMDk1NzFkZWRjYjhhY2VhZTRlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kz39xg4g3fvvIw0eFxnRKTRFYDqcNXs0fc8Up--4Gc8',
    },
  };
  const credits = await axios.get(
    `https://api.themoviedb.org/3/movie/${info}/credits`,
    options
  );
  return credits.data;
};

export const handleGetReviews = async info => {
  const options = {
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzA5ZTg1YTk4YzQzYmE2YWMxNTZlMTc5ODQ1ZDRiYSIsIm5iZiI6MTc0NTc1MjIxMy42MjcsInN1YiI6IjY4MGUxMDk1NzFkZWRjYjhhY2VhZTRlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kz39xg4g3fvvIw0eFxnRKTRFYDqcNXs0fc8Up--4Gc8',
    },
  };
  const reviewsData = await axios.get(
    `https://api.themoviedb.org/3/movie/${info}/reviews`,
    options
  );
  return reviewsData.data;
};

export const handleGetSearchData = async query => {
  const options = {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzA5ZTg1YTk4YzQzYmE2YWMxNTZlMTc5ODQ1ZDRiYSIsIm5iZiI6MTc0NTc1MjIxMy42MjcsInN1YiI6IjY4MGUxMDk1NzFkZWRjYjhhY2VhZTRlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kz39xg4g3fvvIw0eFxnRKTRFYDqcNXs0fc8Up--4Gc8',
    },
    params: {
      query: query,
    },
  };
  const queryData = await axios.get(
    'https://api.themoviedb.org/3/search/movie',
    options
  );
  return queryData.data;
};
