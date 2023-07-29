import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { CardWrapper, Container, MovieName } from './FilmList.styled';

export const FilmList = ({ movies }) => {
  const location = useLocation();

  return (
    <Container>
      {movies.map(({ id, title, poster_path }) => {
        const imgUrl = poster_path
          ? `https://image.tmdb.org/t/p/w342/${poster_path}`
          : 'https://www.tgv.com.my/assets/images/404/movie-poster.jpg';

        return (
          <CardWrapper key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <img src={imgUrl} alt={title} loading="lazy" />
              <MovieName>{title}</MovieName>
            </Link>
          </CardWrapper>
        );
      })}
    </Container>
  );
};

FilmList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
    })
  ).isRequired,
};
