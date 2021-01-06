import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  to {
    0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg);
  }
`;

export const WaveBase = styled.div`
  
  .spinner {
  border: 8px solid rgba(0, 0, 0, 0.1);
  border-left-color: props.dark ? '#FF76D7' : '#662D6B'};;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: ${spin} 2s linear infinite;

  }
`;
