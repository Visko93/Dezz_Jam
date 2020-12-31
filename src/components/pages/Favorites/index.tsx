import * as React from 'react'
import { HomeRoot } from './style'

import MusicCard from '../../organisms/MusicCard'
import Header from '../../organisms/Header'

export interface HomeProps {}

const Favorite: React.FC<HomeProps> = () => {
  return (
    <HomeRoot dark={false}>
      <div className="main__app">
        <Header />
        {/* Card renderinf must be abstracted */}
        <h1>Meus Favoritos</h1>
        <section className="musics">
          <ul className="musics__list">
            <MusicCard dark={false} />
          </ul>
        </section>
        {/* End of card list component */}
      </div>
    </HomeRoot>
  )
}

export default Favorite
