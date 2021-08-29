// next
import _Image from 'next/image';

// packages
import styled from 'styled-components';

export const Header = styled.header`
  margin-bottom: 1.5rem;

  border-bottom: 0.25rem solid var(--ash-gray);

  border-radius: 0.5rem;
  -moz-border-radius: 0.5rem;
  -webkit-border-radius: 0.5rem;

  box-shadow: 0rem 0rem 1.4rem 0rem rgba(175, 175, 175, 0.75);
  -moz-box-shadow: 0rem 0rem 1.4rem 0rem rgba(175, 175, 175, 0.75);
  -webkit-box-shadow: 0rem 0rem 1.4rem 0rem rgba(175, 175, 175, 0.75);
`;

export const NavBar = styled.nav`
  width: var(--max-width);

  margin: auto;
  padding: 1.5rem 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  /* For Image i.e. logo */
  & img {
    cursor: pointer;
  }
`;

export const Image = styled(_Image)`
  cursor: pointer;
`;

export const Links = styled.ul`
  padding: 0;
  list-style-type: none;
`;

export const Link = styled.li`
  display: inline;
  margin-right: 2rem;
`;

export const A = styled.a`
  transition: all 0.3s linear;

  &:hover,
  &:active {
    color: var(--dark-sea-green);
  }
`;

export const Logout = styled.button`
  font: inherit;
  color: inherit;

  border: none;
  background: none;

  margin-left: 2rem;

  cursor: pointer;

  transition: all 0.3s linear;

  &:hover {
    color: var(--dark-sea-green);
  }
`;
