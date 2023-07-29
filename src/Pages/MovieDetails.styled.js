import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const StyledBackLink = styled(Link)`
  display: inline-block;
  margin-bottom: 16px;
  padding: 4px 8px;

  font-weight: 500;
  text-decoration: none;

  color: black;
  border-radius: 4px;
  border: 1px solid black;

  &:hover {
    color: white;
    background-color: orangered;
  }
`;

export const Details = styled.div`
  margin-bottom: 16px;

  .modal__wrapper {
    display: flex;
    flex-direction: column;
    row-gap: 22px;
    align-items: center;
  }

  .modal__poster {
    width: 248px;
    /* height: 315px; */
    object-fit: cover;
    /* object-position: top; */

    border-radius: 5px;
    box-shadow: 1px 1px 24px 2px rgba(1, 1, 1, 0.45);
  }

  .modal__title {
    margin-bottom: 29px;

    font-size: 20px;
    font-weight: 500;
    line-height: calc(23 / 20);
    /* color: #ffffff; */
  }

  .modal__stats {
    width: 100%;
  }

  .stats__row {
    display: flex;
    margin-bottom: 12px;

    font-size: 14px;
    font-weight: 500;
    line-height: calc(16 / 14);
  }

  .stats__name {
    min-width: 140px;
    /* color: #b7b7b7; */
  }

  .stats__data {
    min-width: 108px;
    /* color: #ffffff; */
  }

  .stats__data-votes {
    padding: 1px 5px;

    font-size: 12px;
    font-weight: 500;
    line-height: calc(14 / 12);
    /* color: #111111; */

    border-radius: 5px;
    background-color: #ffffff;
  }

  .stats__data-separator {
    padding-inline: 5px;

    font-size: 16px;
    line-height: 1;
    /* color: #b7b7b7; */
  }

  .modal__about {
    margin-bottom: 12px;

    font-size: 14px;
    font-weight: 500;
    line-height: calc(16 / 14);
    /* color: #b7b7b7; */
    text-transform: uppercase;
  }

  .modal__text {
    /* margin-bottom: 16px; */

    font-size: 14px;
    line-height: calc(20 / 12);
    /* color: #f8f8f8; */
  }

  .modal__error-wrapper {
    display: flex;
    align-items: center;
  }

  .modal__error-text {
    font-size: 24px;
    line-height: 1.5;
    /* color: #ffffff; */
  }

  .modal__error-text:first-child {
    margin-bottom: 15px;
  }

  @media screen and (min-width: 560px) {
    /* .modal__wrapper {
      flex-direction: row;
      column-gap: 16px;
      align-items: flex-start;
    } */
  }

  @media screen and (min-width: 768px) {
    .modal__wrapper {
      flex-direction: row;
      column-gap: 16px;
      align-items: flex-start;
    }

    .modal__container {
      width: 704px;
      min-height: 488px;
      padding: 44px;
    }

    .modal__poster {
      min-width: 294px;
      height: 400px;
    }

    .modal__title {
      margin-bottom: 24px;

      font-size: 24px;
      font-weight: 500;
      line-height: calc(28 / 24);
    }

    .modal__stats {
      margin-bottom: 20px;
    }

    .stats__row:last-child {
      margin-bottom: 0;
    }

    .stats__data {
      min-width: 166px;
    }

    .modal__about {
      margin-bottom: 16px;
    }

    .modal__text {
      /* margin-bottom: 24px; */
    }
  }

  @media screen and (min-width: 1280px) {
    .modal__container {
      width: 846px;
      height: 598px;
      padding: 60px;
    }

    .modal__wrapper {
      column-gap: 20px;
    }

    .modal__poster {
      width: 375px;
      height: 478px;
    }

    .modal__title {
      margin-bottom: 28px;
      line-height: calc(32 / 24);
    }

    .stats__row {
      margin-bottom: 14px;

      font-size: 16px;
      line-height: calc(19 / 16);
    }

    .stats__name {
      min-width: 151px;
    }

    .stats__data {
      min-width: 180px;
    }

    .stats__data-votes {
      padding: 1px 8px;

      font-size: 14px;
      line-height: calc(16 / 14);
    }

    .stats__data-separator {
      line-height: calc(19 / 16);
    }

    .modal__about {
      font-size: 16px;
      line-height: calc(16 / 16);
    }

    .modal__text {
      font-size: 14px;
      line-height: calc(20 / 14);
    }
  }
`;

export const Additional = styled.div`
  h2 {
    margin-bottom: 16px;
  }

  .subPageList {
    display: flex;
    margin-bottom: 16px;

    a:not(:last-child) {
      margin-right: 10px;
    }
  }
`;

export const StyledLink = styled(NavLink)`
  padding: 4px 8px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  border: 1px solid black;

  &.active,
  &:hover {
    color: white;
    background-color: orangered;
  }
`;
