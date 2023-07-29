import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { searchById } from 'services/api';
import { StyledList } from './Cast.styled';

const Cast = ({ movieId }) => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    (async () => {
      const { cast } = await searchById(movieId, 'credits');
      setCast(cast);
      // console.log(cast);
    })();
  }, [movieId]);

  return (
    <div>
      {cast && (
        <StyledList>
          {cast.map(({ id, profile_path, name }) => {
            const imgUrl = profile_path
              ? `https://image.tmdb.org/t/p/w342/${profile_path}`
              : 'https://www.tgv.com.my/assets/images/404/movie-poster.jpg';

            return (
              <li key={id}>
                <img src={imgUrl} alt={name} loading="lazy" />
                <p>{name}</p>
              </li>
            );
          })}
        </StyledList>
      )}
      {cast.length === 0 && <p>We don't have cast for this movie</p>}
    </div>
  );
};

Cast.propTypes = {
  movieId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Cast;
