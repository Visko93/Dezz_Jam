import * as React from 'react'
import { Link } from 'react-router-dom'

import Skeleton from 'react-loading-skeleton'
import {
  FiPlay,
  FiPlus,
  FiMinus,
  FiExternalLink,
  FiPause,
} from 'react-icons/fi'
import { MusicCardStyle } from './style'

import placeholder from '../../../assets/png/imgplh.png'

const MusicCard = ({ dark = false, favorite = false, music }) => {
  const [playing, setPlaying] = React.useState(false)

  const handlePlay = (e) => {
    const audio = e.target.children[0]
    if (!audio || audio === undefined) return
    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      audio.play()
      setPlaying(true)
      setTimeout(() => {
        setPlaying(false)
      }, 31000)
    }
  }

  return (
    <MusicCardStyle dark={dark}>
      <section className="musics">
        <ul className="musics__list">
          <li className="musics__card">
            <div className="musics__card-img">
              {music ? (
                <img src={music.album.cover_medium} alt="album cover" />
              ) : (
                <Skeleton height={200} />
              )}
              <small>{music ? music.album.title : ''}</small>
            </div>
            <div className="musics__card-infos">
              <div className="musics__card-info">
                <div className=".musics__card-infos card__title">
                  <h2>{music ? music.title : <Skeleton />}</h2>
                  <hr />
                  <small>{music ? music.artist.name : <Skeleton />}</small>
                </div>
                <div className="musics__card-item">
                  <h4>
                    {music ? (
                      `Duração: ${music.duration} min`
                    ) : (
                      <Skeleton width={250} />
                    )}
                  </h4>
                  <h4>
                    {music ? (
                      `Ranking: ${music.position} º`
                    ) : (
                      <Skeleton width={250} />
                    )}
                  </h4>
                </div>
              </div>
              <div className="musics__card-action">
                <button onClick={handlePlay}>
                  <audio src={music.preview} />
                  {playing ? (
                    <FiPause size={20} fill={'white'} color={'white'} />
                  ) : (
                    <FiPlay size={20} fill={'white'} color={'white'} />
                  )}
                </button>
                <a
                  href={music ? music.link : null}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>
                    <FiExternalLink size={20} fill={'white'} color={'white'} />
                  </button>
                </a>
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
