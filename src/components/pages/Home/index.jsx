import * as React from 'react'
import PropTypes from 'prop-types'
import getTrendingList from '../../../api/getMusic'
import getSearchMusic from '../../../api/getSearchMusic'
import useMusicsSearch from '../../../hooks/useMusicsSearch'

import MusicCard from '../../organisms/MusicCard'
import Header from '../../organisms/Header'
import LoadMore from '../../atoms/LoadMoreButton'
import SearchInput from '../../organisms/SearchInput'
import { HomeRoot } from './style'
import SkeletonPlaceholder from '../../atoms/Skeleton'

import { connect, useStore } from 'react-redux'
import * as favoriteActions from '../../../redux/actions/addFavorite'
import { bindActionCreators } from 'redux'
import Spinner from '../../atoms/Spinner'
import { data as musicList } from '../../../db'

const Home = ({ dark }) => {
  const [favorites, setFavorites] = React.useState([])
  const [searchParam, setSearchParam] = React.useState('')
  const [searchQuery, setSearchQuery] = React.useState('')

  const loading = false
  const error = false
  //const { loading, error, musicList } = useMusicsSearch();
  /**
   * Chamar a API da Deezer e popular o array de MusicList
   */

  /******************************************************************** */
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
  const handleSubmitSearch = async (e) => {}

  const store = useStore()

  const handleAddFav = (e) => {
    e.preventDefault()
    const { id } = e.target
    const addMusic = musicList.filter(
      (item) => item.id === parseInt(id),
    )
    console.log(addMusic, id)
    store.dispatch(favoriteActions.addFavorite(addMusic))
  }
  if (error) return
  return (
    <HomeRoot dark={dark}>
      <div className="main__app">
        <Header
          props={{
            dark,
          }}
        />
        <SearchInput
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
        {loading ? (
          <Spinner dark={dark} />
        ) : (
          <section className="musics">
            <ul className="musics__list">
              {musicList.map((music) => {
                const {
                  id,
                  album: {
                    cover_medium: coverImg,
                    title: albumTitle,
                  },
                  artist: { name: artistName },
                  title,
                  duration,
                  position,
                  link,
                  preview,
                } = music
                return loading ? (
                  <SkeletonPlaceholder dark={dark} />
                ) : (
                  <MusicCard
                    dark={dark}
                    favorite={false}
                    music={{
                      id,
                      coverImg,
                      albumTitle,
                      artistName,
                      title,
                      duration,
                      position,
                      link,
                      preview,
                    }}
                    handleAddFav={handleAddFav}
                    isLoaded={music ? true : false}
                    key={music.id}
                  />
                )
              })}
            </ul>
          </section>
        )}
      </div>
      <LoadMore props={{ dark }} />
    </HomeRoot>
  )
}

Home.protoTypes = {
  dispatch: PropTypes.func.isRequired,
  favorites: PropTypes.array.isRequired,
  dark: PropTypes.bool,
}

function mapStateToProps(favorite) {
  return {
    favorite,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      favoriteActions.addFavorite,
      dispatch,
    ),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
