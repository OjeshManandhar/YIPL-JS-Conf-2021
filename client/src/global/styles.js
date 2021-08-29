// packages
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;

  overflow: hidden;
`;

export const Center = styled(Container)`
  justify-content: center;
  align-items: center;
`;

export const FullScreenCenter = styled(Center)`
  width: 100vw;
  height: 100vh;
`;

export const Heading = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  font-variant: small-caps;

  margin-bottom: 1.5rem;
`;

export const Button = styled.button`
  padding: 0.5rem 1.5rem;

  font-size: 1.6rem;
  font-weight: 600;

  color: var(--dark-slate-gray);
  background-color: var(--white);

  border-radius: 0.5rem;
  border-color: var(--white);

  box-shadow: none;

  cursor: pointer;

  &:hover {
    border-color: var(--ash-gray);
    background-color: var(--ash-gray);
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  margin-bottom: 2rem;
`;

export const FormControl = styled(Container)`
  align-items: flex-start;

  width: 100%;

  margin-bottom: 1.25rem;
`;

export const FormLabel = styled.label`
  margin-bottom: 0.5rem;
`;

export const FormInput = styled.input`
  width: 30rem;

  padding: 0.5rem;

  font-size: 1.75rem;
`;

export const FormSelect = styled.select`
  width: 30rem;

  padding: 0.5rem;

  font: inherit;

  font-size: 1.75rem;
`;

export const FormSubmit = styled(Button)`
  margin-top: 1.5rem;
`;

export const Text = styled.p`
  font-size: 1.6rem;
`;

export const ClickablText = styled.span`
  color: var(--dark-sea-green);

  cursor: pointer;

  &:hover {
    color: var(--ash-gray);
  }
`;
