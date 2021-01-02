import styled from 'styled-components'

export const HomeRoot = styled.main`
  .main__app {
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 100%;
    max-width: 1000px;
    margin: 0 auto;
  }
  .musics__list {
    display: grid;
    grid-template-columns: 1fr;
    align-self: center;
    align-items: center;
  }
`
