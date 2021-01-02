import * as React from 'react'
import { HomeRoot } from './style'
import getTrendingList from '../../../api/getMusic'

import MusicCard from '../../organisms/MusicCard'
import Header from '../../organisms/Header'

const Home = () => {
  const [MusicsList, setMusicsList] = React.useState([])
  const [error, setError] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const offset = 10

  React.useEffect(() => {
    setLoading(true)
    getTrendingList(offset)
      .then((res) => setMusicsList((prevState) => [...prevState, ...res]))
      .catch((e) => {
        setError(true)
        console.log('Dados não chegaram no routes')
      })
      .finally(() => setLoading(false))
  }, [offset])

  console.log(MusicsList)
  if (error) return
  return (
    <HomeRoot dark={false}>
      <div className="main__app">
        <Header dark={false} />
        {/* Card renderinf must be abstracted */}
        <section className="musics">
          <ul className="musics__list">
            {MusicsList.map((music) => (
              <MusicCard
                dark={false}
                favorite={false}
                music={music}
                key={music.id}
              />
            ))}
          </ul>
        </section>
        {/* End of card list component */}
      </div>
    </HomeRoot>
  )
}

export default Home
