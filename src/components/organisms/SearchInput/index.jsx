import * as React from 'react'
import { FormRoot } from './style'
import useMusicsSearch from '../../../hooks/useMusicsSearch'

import logo from '../../../assets/svg/logo_dezz.svg'

const SearchInput = ({
  props: { dark, query, handleChange, handleSubmit },
}) => {
  return (
    <FormRoot dark={dark}>
      <form onSubmit={handleSubmit}>
        <div className="header__search">
          <input
            type="search"
            onChange={handleChange}
            value={query}
            id="search"
          />
          <button type="submit" className="header__search-button">
            Pesquisar
          </button>
        </div>
        <fieldset className="header__radioInput" onChange={() => {}}>
          <label>
            <input name="params" value="music" type="radio" />
            Nome da Música
          </label>
          <label>
            <input name="params" value="album" type="radio" />
            Album
          </label>
          <label>
            <input name="params" value="artist" type="radio" />
            Nome do Artista
          </label>
        </fieldset>
      </form>
    </FormRoot>
  )
}

export default SearchInput
