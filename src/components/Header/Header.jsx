import { StyledHeader, StyledLogo, StyledNavLink } from './Header.styled';

const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo>
        <span role="img" aria-label="computer icon">
          🎬
        </span>{' '}
        Movies
      </StyledLogo>
      <nav>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/movies">Movies</StyledNavLink>
      </nav>
    </StyledHeader>
  );
};

export default Header;
