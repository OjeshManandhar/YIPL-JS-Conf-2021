// packages
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  cursor: pointer;
`;

export const Info = styled.div`
  font-size: 1.6rem;
`;

export const Title = styled.span`
  font-size: 1.7rem;
  font-weight: 600;
`;

export const Description = styled.p`
  font-size: 1.6rem;
  color: var(--ash-gray);

  margin-top: 0.5rem;
`;

export const Status = styled.div`
  font-size: 1.5rem;

  margin-left: auto;
  padding: 0.1rem 1.25rem;

  border-radius: 1rem;
  border: 0.1rem solid var(--hookers-green);

  background-color: var(--charcoal);
`;
