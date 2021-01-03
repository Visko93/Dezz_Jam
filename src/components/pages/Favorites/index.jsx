import * as React from 'react'
import { HomeRoot } from './style'

import MusicCard from '../../organisms/MusicCard'
import Header from '../../organisms/Header'

const Favorite = ({ dark }) => {
  const [searchParam, setSearchParam] = React.useState()

  const handleParamSelection = (e) => {
    const { value } = e.target
    setSearchParam(value)
  }
  return (
    <HomeRoot dark={dark}>
      <div className="main__app">
        <Header props={{ dark, searchParam, handleParamSelection }} />
        {/* Card renderinf must be abstracted */}
        <h1>Meus Favoritos</h1>
        <section className="musics">
          <ul className="musics__list">
            <MusicCard dark={dark} favorite={true} />
          </ul>
        </section>
        {/* End of card list component */}
      </div>
    </HomeRoot>
  )
}

export default Favorite
