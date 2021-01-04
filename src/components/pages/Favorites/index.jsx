import * as React from 'react'
import { HomeRoot } from './style'

import MusicCard from '../../organisms/MusicCard'
import Header from '../../organisms/Header'
import SearchInput from '../../organisms/SearchInput'

const Favorite = ({ dark }) => {
  const [query, setQuery] = React.useState('')
  const [param, setParam] = React.useState('')

  const handleChange = (e) => {
    const { value } = e.target
    setQuery(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    alert(query)
  }
  console.log(query)
  return (
    <HomeRoot dark={dark}>
      <div className="main__app">
        <Header />
        <SearchInput props={{ dark, query, handleChange, handleSubmit }} />
        {/* Card renderinf must be abstracted */}
        <h1>Meus Favoritos</h1>
        <section className="musics">
          <ul className="musics__list">
            <MusicCard props={dark} favorite />
          </ul>
        </section>
        {/* End of card list component */}
      </div>
    </HomeRoot>
  )
}

export default Favorite
