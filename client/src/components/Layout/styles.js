// packages
import styled from 'styled-components';

export const Header = styled.header`
  margin-bottom: 0.5rem;
`;

export const NavBar = styled.nav`
  padding: 1.5rem 3rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-bottom: 0.25rem solid var(--ash-gray);

  border-radius: 0.5rem;
  -moz-border-radius: 0.5rem;
  -webkit-border-radius: 0.5rem;

  box-shadow: 0rem 0rem 1.4rem 0rem rgba(175, 175, 175, 0.75);
  -moz-box-shadow: 0rem 0rem 1.4rem 0rem rgba(175, 175, 175, 0.75);
  -webkit-box-shadow: 0rem 0rem 1.4rem 0rem rgba(175, 175, 175, 0.75);

  /* For Image i.e. logo */
  & img {
    cursor: pointer;
  }
`;
