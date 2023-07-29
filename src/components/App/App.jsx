import { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { Loader } from 'components/Loader/Loader';
import { Container } from './App.styled';
import Header from 'components/Header/Header';
// import Home from 'Pages/Home';
// import Movies from 'Pages/Movies';
// import MovieDetails from 'Pages/MovieDetails';

const LazyHome = lazy(() => import('../../Pages/Home'));
const LazyMovies = lazy(() => import('../../Pages/Movies'));
const LazyMovieDetails = lazy(() => import('../../Pages/MovieDetails'));

export const App = () => {
  return (
    <Container>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<LazyHome />} />
          <Route path="/movies" element={<LazyMovies />} />
          <Route path="/movies/:movieId/*" element={<LazyMovieDetails />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Container>
  );
};
