import * as React from 'react'
import { HeaderRoot } from './style'

import logo from '../../../assets/svg/logo_dezz.svg'

export interface HeaderProps {
  dark?: boolean
}

const Header: React.FC<HeaderProps> = ({ dark = false }) => {
  return (
    <HeaderRoot dark={dark}>
      <header className="header">
        <img className="header__logo" src={logo} alt="log da dezz" />
        <form>
          <div className="header__search">
            <input type="search" name="search" id="search" />
            <button onSubmit={() => {}} className="header__search-button">
              Pesquisar
            </button>
          </div>
          <fieldset className="header__radioInput">
            <label htmlFor="music">
              <input type="radio" id="music" name="searchParams" />
              Nome da Música
            </label>
            <label htmlFor="album">
              <input type="radio" id="album" name="searchParams" />
              Albúm
            </label>
            <label htmlFor="artist">
              <input type="radio" id="artist" name="searchParams" />
              Nome do Artista
            </label>
          </fieldset>
        </form>
      </header>
    </HeaderRoot>
  )
}

export default Header
