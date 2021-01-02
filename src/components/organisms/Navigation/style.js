import styled from 'styled-components'

export const NavigationRoot = styled.main`
  .nav {
    position: fixed;
    top: 5px;
    left: 25px;

    .nav__container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      list-style: none;
      margin-bottom: 1em;
      border: 0.025em solid #a0e02c;
      border-radius: 0 6px;

      .nav__container-item {
        margin-left: 0;
        border: 0.025em solid #a0e02c;
        padding: 0.125em;

        a {
          text-decoration: none;
        }
      }
    }
  }
`
