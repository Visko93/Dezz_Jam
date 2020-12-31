import styled from 'styled-components'

interface HomeProps {
  className?: string
  dark?: boolean
}

interface MusicProps {
  className?: string
  dark?: boolean
}

export const HomeRoot = styled.main<HomeProps>`
  .main__app {
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 100%;
    max-width: 1000px;
    margin: 0 auto;
  }

  .header {
    display: flex;
    color: ${(props) => (props.dark ? '#A0E02C' : '#390040')};
    flex-direction: column;
    width: 100%;
    justify-content: flex-start;
  }

  .header__search {
    display: flex;
    justify-content: space-around;
    margin-top: 0.75em;
  }
  .header__radioInput {
    display: flex;
    height: 5em;
    justify-content: space-around;
    align-items: center;
    margin-top: 0.75em;
  }
  fieldset {
    outline: none;
    border: none;
  }
  label {
    display: flex;
    align-items: center;
    transition: color ease-in-out 100ms;

    &:focus,
    &:hover {
      color: ${(props) => (props.dark ? '#390040' : '#A0E02C')};
    }
  }
  input[type='radio'] {
    display: inline-block;
    width: 2em;
    height: 2em;
    margin-right: 0.175em;
    border-color: ${(props) => (props.dark ? '#A0E02C' : '#390040')};

    &:focus,
    &:hover {
      background: ${(props) => (props.dark ? '#A0E02C' : '#390040')};
    }
  }
  input[type='search'] {
    width: 40%;
    min-width: 150px;
    -webkit-appearance: none;
    appearance: none;
    border-radius: 5px;
    padding: 0.225em 1em;

    &:focus,
    &:hover {
      border-color: ${(props) => (props.dark ? '#390040' : '#A0E02C')};
      outline-color: ${(props) => (props.dark ? '#390040' : '#A0E02C')};
    }
  }
  .header__search-button {
    border-style: solid;
    min-width: 50px;
    border-radius: 8px;
    border-color: ${(props) => (props.dark ? '#A0E02C' : '#390040')};
    transition: color ease-in-out 200ms;
    transition: border-color ease-in-out 200ms;

    padding: 0 5%;

    &:focus,
    &:hover {
      border-color: ${(props) => (props.dark ? '#390040' : '#A0E02C')};
      color: ${(props) => (props.dark ? '#390040' : '#A0E02C')};
    }
  }
  .musics {
    color: ${(props) => (props.dark ? '#FF76D7' : '#6CAE00')};
  }
  .musics__list {
    display: grid;
    grid-template-columns: 1fr;
    margin: 0 auto;
  }
`