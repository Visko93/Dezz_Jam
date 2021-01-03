import * as React from 'react'
import { HomeRoot } from './style'
import getTrendingList from '../../../api/getMusic'
import getSearchMusic from '../../../api/getSearchMusic'

import MusicCard from '../../organisms/MusicCard'
import Header from '../../organisms/Header'

const Home = ({ dark }) => {
  const [MusicsList, setMusicsList] = React.useState([])
  const [searchParam, setSearchParam] = React.useState('')
  const [searchQuery, setSearchQuery] = React.useState('')
  const [error, setError] = React.useState(false)
  const [loading, setLoading] = React.useState(false)

  const offset = 0

  React.useEffect(() => {
    setLoading(true)
    getTrendingList(offset)
      .then((res) => setMusicsList((prevState) => [...prevState, ...res]))
      .catch((e) => {
        setError(true)
        console.log('Dados não chegaram no routes')
      })
      .finally(() => setLoading(false))
  }, [])

  const handleParamSelection = (e) => {
    const { value } = e.target
    setSearchParam(value)
  }
  const handleInputChange = (e) => {
    const { value } = e.target
    setTimeout(() => {
      setSearchQuery(value)
    }, 1800)
    console.log(searchQuery)
  }

  const handleSubmitSearch = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const data = await getSearchMusic(searchParam, searchQuery)
      console.log(data)
    } catch (error) {
      setError(true)
      throw new Error(`Something Bad happened, ${error}`)
    } finally {
      setLoading(false)
    }
  }
  if (error) return
  return (
    <HomeRoot dark={dark}>
      <div className="main__app">
        <Header
          props={{
            dark,
            searchParam,
            searchQuery,
            setSearchQuery,
            handleParamSelection,
            handleSubmitSearch,
          }}
        />
        {/* Card renderinf must be abstracted */}
        <section className="musics">
          <ul className="musics__list">
            {MusicsList.map((music) => (
              <MusicCard
                dark={dark}
                favorite={false}
                music={music}
                key={`${music.id}`}
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
