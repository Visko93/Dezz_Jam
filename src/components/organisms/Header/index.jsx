import * as React from 'react'
import { HeaderRoot } from './style'
import useMusicsSearch from '../../../hooks/useMusicsSearch'

import logo from '../../../assets/svg/logo_dezz.svg'

const Header = ({ props: { dark } }) => {
  const [query, setQuery] = React.useState('')
  const [params, setParams] = React.useState()

  const searchASction = useMusicsSearch(query, params)

  return (
    <HeaderRoot dark={dark}>
      <header className="header">
        <img className="header__logo" src={logo} alt="log da dezz" />
        <form>
          <div className="header__search">
            <input type="search" onChange={(e) => {}} id="search" />
            <button className="header__search-button">Pesquisar</button>
          </div>
          <fieldset className="header__radioInput" onChange={() => {}}>
            <label>
              <input
                name="params"
                value="music"
                type="radio"
                // checked={searchParam === 'music'}
              />
              Nome da Música
            </label>
            <label>
              <input
                name="params"
                value="album"
                type="radio"
                // checked={searchParam === 'album'}
              />
              Albúm
            </label>
            <label>
              <input
                name="params"
                value="artist"
                type="radio"
                // checked={searchParam === 'artist'}
              />
              Nome do Artista
            </label>
          </fieldset>
        </form>
      </header>
    </HeaderRoot>
  )
}

export default Header
