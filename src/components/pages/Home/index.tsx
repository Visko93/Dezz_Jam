import * as React from 'react'
import { HomeRoot } from './style'

import MusicCard from '../../organisms/MusicCard'
import Header from '../../organisms/Header'

export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <HomeRoot dark={false}>
      <div className="main__app">
        <Header dark={false} />
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
