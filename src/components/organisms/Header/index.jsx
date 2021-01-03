import * as React from 'react'
import { HeaderRoot } from './style'

import logo from '../../../assets/svg/logo_dezz.svg'

const SearchParams = {
  artist: 'ARTIST',
  album: 'ALBUM',
  music: 'TRACK',
}
const Header = ({
  props: {
    dark,
    searchParam,
    handleParamSelection,
    handleSubmitSearch,
    setSearchQuery,
    searchQuery,
  },
}) => {
  return (
    <HeaderRoot dark={dark}>
      <header className="header">
        <img className="header__logo" src={logo} alt="log da dezz" />
        <form>
          <div className="header__search">
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value)
              }}
              id="search"
            />
            <button
              onSubmit={handleSubmitSearch}
              className="header__search-button"
            >
              Pesquisar
            </button>
          </div>
          <fieldset className="header__radioInput">
            <label htmlFor="music">
              <input
                type="radio"
                value="music"
                onChange={handleParamSelection}
                checked={searchParam === 'music'}
              />
              Nome da Música
            </label>
            <label htmlFor="album">
              <input
                type="radio"
                value="album"
                onChange={handleParamSelection}
                checked={searchParam === 'album'}
              />
              Albúm
            </label>
            <label htmlFor="artist">
              <input
                type="radio"
                value="artist"
                onChange={handleParamSelection}
                checked={searchParam === 'artist'}
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
