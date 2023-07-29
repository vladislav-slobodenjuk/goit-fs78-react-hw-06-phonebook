import { lazy, Suspense } from 'react';
import { useEffect, useRef, useState } from 'react';
import { Route, Routes, useLocation, useParams } from 'react-router-dom';
import { searchById } from 'services/api';

// import { Cast } from 'components/Cast/Cast';
// import { Reviews } from 'components/Reviews/Reviews';
import { Loader } from 'components/Loader/Loader';
import {
  Additional,
  Details,
  StyledBackLink,
  StyledLink,
} from './MovieDetails.styled';

const LazyCast = lazy(() => import('../components/Cast/Cast'));
const LazyReviews = lazy(() => import('../components/Reviews/Reviews'));

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    if (!movieId) return;

    (async () => {
      const res = await searchById(movieId);
      setMovie(res);
    })();
  }, [movieId]);

  return (
    movie && (
      <main>
        <StyledBackLink to={backLinkLocationRef.current}>
          Go Back
        </StyledBackLink>
        <Details>
          <div className="modal__wrapper">
            <img
              className="modal__poster"
              src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
              alt={movie.title}
            />

            <div className="modal__description">
              <h2 className="modal__title">{movie.title}</h2>

              <div className="modal__stats">
                <div className="stats__row">
                  <p className="stats__name">Vote / Votes</p>
                  <p className="stats__data">
                    <span className="stats__data-votes">
                      {movie.vote_average.toFixed(1)}
                    </span>
                    <span className="stats__data-separator"> / </span>
                    <span className="stats__data-votes">
                      {new Intl.NumberFormat('en-US').format(movie.vote_count)}
                    </span>{' '}
                  </p>
                </div>
                <div className="stats__row">
                  <p className="stats__name">Popularity</p>
                  <p className="stats__data">
                    {new Intl.NumberFormat('en-US').format(
                      movie.popularity.toFixed(1)
                    )}
                  </p>
                </div>
                <div className="stats__row">
                  <p className="stats__name">Genre</p>
                  <p className="stats__data">
                    {movie.genres.map(({ name }) => name).join(', ')}
                  </p>
                </div>
              </div>

              <h3 className="modal__about">About</h3>
              <p className="modal__text">{movie.overview}</p>
            </div>
          </div>
        </Details>

        <Additional>
          <h2>Additional information</h2>
          <ul className="subPageList">
            <StyledLink to="cast">Cast</StyledLink>
            <StyledLink to="reviews">Reviews</StyledLink>
          </ul>

          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="cast" element={<LazyCast movieId={movieId} />} />
              <Route
                path="reviews"
                element={<LazyReviews movieId={movieId} />}
              />
            </Routes>
          </Suspense>
        </Additional>
      </main>
    )
  );
};

export default MovieDetails;
