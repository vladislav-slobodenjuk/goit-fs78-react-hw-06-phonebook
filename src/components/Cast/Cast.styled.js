import styled from 'styled-components';

export const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(136px, 1fr));
  gap: 16px;

  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 32px;
  }
`;
