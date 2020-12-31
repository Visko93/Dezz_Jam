import * as React from 'react'
import { HomeRoot } from './style'

import logo from '../../../assets/svg/logo_dezz.svg'
import MusicCard from '../../organisms/MusicCard'

export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <HomeRoot dark={false}>
      <div className="main__app">
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
        {/* Card renderinf must be abstracted */}
        <section className="musics">
          <ul className="musics__list">
            <MusicCard dark={false} favorite={false} />
          </ul>
        </section>
        {/* End of card list component */}
      </div>
    </HomeRoot>
  )
}

export default Home
