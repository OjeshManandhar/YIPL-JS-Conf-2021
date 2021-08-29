// packages
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Checkbox = styled.input`
  margin-top: 0.5rem;
  margin-right: 1rem;

  cursor: pointer;
`;

export const Info = styled.div`
  font-size: 1.6rem;

  text-decoration: ${props => (props.completed ? 'line-through' : 'none')};
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
