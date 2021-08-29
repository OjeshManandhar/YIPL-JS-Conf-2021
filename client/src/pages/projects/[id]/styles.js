// packages
import styled from 'styled-components';

// global
import * as G from 'global/styles';

export const Container = styled(G.Container)`
  width: calc(var(--max-width) / 2);

  margin: auto;
  padding: 1rem 2rem;

  border: 0.1rem solid var(--hookers-green);
  border-radius: 1rem;

  background-color: var(--dark-slate-gray);
`;

export const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.span`
  font-size: 1.7rem;
  font-weight: 600;
`;

export const Status = styled.span`
  font-size: 1.5rem;

  padding: 0.1rem 1.25rem;

  border-radius: 1rem;
  border: 0.1rem solid var(--hookers-green);

  background-color: var(--charcoal);
`;

export const Description = styled.p`
  font-size: 1.6rem;
  color: var(--ash-gray);

  margin-top: 1rem;
`;

export const Text = styled.div`
  font-size: 1.5rem;

  margin-top: 1rem;
`;
