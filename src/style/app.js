import styled from 'styled-components'

export const AppStyle = styled.div`
  box-sizing: border-box;
  width: 100vw;
  min-height: 100vh;
  max-width: '1200px';
  margin: '0 auto';

  color: ${(props) => (props.dark ? '#6CAE00' : '#390040')};
  font-weight: 600;
  background-color: ${(props) => (props.dark ? '#303030' : '#DDE0D5')};
`
