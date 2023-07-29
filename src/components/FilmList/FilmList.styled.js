import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(288px, 1fr));
  gap: 16px;
`;

export const CardWrapper = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  padding: 5px;
  min-height: 468px;

  border: 1px solid black;
  border-radius: 4px;

  transition: transform 0.3s;

  img {
    margin-bottom: 8px;

    /* height: 100%; */
    min-height: 288px;
    width: 100%;
    max-width: 342px;

    aspect-ratio: 2/3;
    object-fit: cover;

    border-radius: 4px;
  }

  &:hover {
    transform: scale(1.03);
  }

  > a {
    text-decoration: none;
  }
`;

export const MovieName = styled.h3`
  margin-bottom: 0;

  max-width: 342px; // the same as img width
  color: black;
`;
