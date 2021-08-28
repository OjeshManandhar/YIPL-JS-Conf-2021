// packages
import styled from 'styled-components';

// global
import * as G from 'global/styles';

export const Container = styled(G.Container)`
  width: var(--max-width);

  margin: auto;
`;

export const List = styled.ul`
  padding: 0;
  list-style-type: none;
`;

export const ListItem = styled.li`
  margin-right: 2rem;
`;
