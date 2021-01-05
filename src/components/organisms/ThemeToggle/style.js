import styled from 'styled-components'

export const ThemeToggleRoot = styled.main`
  position: absolute;
  top: 5px;
  right: 25px;

  .btn {
    border: transparent;
    outline: none;
    background: transparent;
    color: ${(props) => (props.dark ? '#A0E02C' : '#390040')};
  }
  .icon {
    outline: none;
    color: ${(props) => (props.dark ? '#A0E02C' : '#390040')};
    transition: all ease-in-out 300ms;
  }
`
