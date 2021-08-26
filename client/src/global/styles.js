// packages
import styled from 'styled-components';

export const Container = styled.div`
  flex-grow: 1;

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
