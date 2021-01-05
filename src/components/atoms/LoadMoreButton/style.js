import styled from 'styled-components';

export const LoadMoreButton = styled.canvas`
  .btn {
    width: 80%;
    border-radius: 16px;
    background-color: ${(props) =>
      props.dark ? '#FF76D7' : '#662D6B'};
    border-color: ${(props) => (props.dark ? '#FF76D7' : '#662D6B')};
    padding: 1.25em 3.25em;

    transition: color ease-in-out 200ms;
    transition: background-color ease-in-out 200ms;

    &:focus,
    &:hover {
      border-color: ${(props) =>
        props.dark ? '#662D6B' : '#FF76D7'};
      background-color: ${(props) =>
        props.dark ? '#662D6B' : '#FF76D7'};
      color: ${(props) => (props.dark ? '#662D6B' : '#FF76D7')};
    }
  }
`;
