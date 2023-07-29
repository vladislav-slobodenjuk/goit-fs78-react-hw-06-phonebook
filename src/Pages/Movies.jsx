import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { FilmList } from 'components/FilmList/FilmList';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { searchByQuery } from 'services/api';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');

  const updateQuery = query => {
    if (query === '') return console.log('empty query');
    setSearchParams({ query });
  };

  useEffect(() => {
    if (!query) return;

    (async () => {
      const response = await searchByQuery(query);
      setMovies(response);
    })();
  }, [query]);

  return (
    <main>
      <h1 style={{ marginBottom: '16px' }}>Movies Search</h1>
      <SearchBox onHandleSubmit={updateQuery} />
      {movies.length > 0 && <FilmList movies={movies} />}
      {query && movies.length === 0 && <p>Nothig Found</p>}
    </main>
  );
};

export default Movies;
