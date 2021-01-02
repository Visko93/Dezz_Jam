import * as React from 'react'
import { FiPlay, FiPlus, FiMinus, FiExternalLink } from 'react-icons/fi'
import { MusicCardStyle } from './style'

import placeholder from '../../../assets/png/imgplh.png'

const MusicCard = ({ dark = false, favorite = false, music }) => {
  const playRef = React.useRef(null)

  const handlePlay = (e) => {
    console.log(playRef.current)
  }

  return (
    <MusicCardStyle dark={dark}>
      <section className="musics">
        <ul className="musics__list">
          <li className="musics__card">
            <div className="musics__card-img">
              <img src={music.album.cover_medium} alt="album cover" />
              <small>{music.album.title}</small>
            </div>
            <div className="musics__card-infos">
              <div className="musics__card-info">
                <div className=".musics__card-infos card__title">
                  <h2>{music.title}</h2>
                  <hr />
                  <small>{music.artist.name}</small>
                </div>
                <div className="musics__card-item">
                  <h4>Duração: {music.duration} min</h4>
                  <h4>Ranking: {music.position}º</h4>
                </div>
              </div>
              <div className="musics__card-action">
                <button>
                  <audio ref={playRef} src={music.preview}></audio>
                  <FiPlay
                    onClick={handlePlay}
                    size={20}
                    fill={'white'}
                    color={'white'}
                  />
                </button>
                <button>
                  <FiExternalLink size={20} fill={'white'} color={'white'} />
                </button>
                <button>
                  {favorite ? (
                    <FiMinus size={20} fill={'white'} color={'white'} />
                  ) : (
                    <FiPlus size={20} fill={'white'} color={'white'} />
                  )}
                </button>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </MusicCardStyle>
  )
}

export default MusicCard
