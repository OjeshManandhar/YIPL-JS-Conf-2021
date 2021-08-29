// packages
import styled from 'styled-components';

// global
import * as G from 'global/styles';

export const Container = styled(G.Container)`
  width: calc(var(--max-width) / 2);

  margin: auto;
`;

export const List = styled.ul`
  list-style-type: none;

  border: 0.1rem solid var(--hookers-green);
  border-radius: 1rem;

  background-color: var(--dark-slate-gray);
`;

export const ListItem = styled.li`
  margin-bottom: 0.5rem;

  padding: 1rem 2rem;

  border-bottom: 0.1rem solid var(--hookers-green);
  border-radius: 0.5rem;

  &:last-child {
    margin-bottom: 0rem;
  }
`;
