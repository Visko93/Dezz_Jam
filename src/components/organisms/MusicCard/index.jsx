import * as React from 'react'
import { Link } from 'react-router-dom'
import ReactAudioPlayer from 'react-audio-player'
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
              {music ? (
                <ReactAudioPlayer
                  color={'blue'}
                  controlsList="nodownload"
                  src={music ? music.preview : null}
                  controls
                />
              ) : (
                <Skeleton height={30} width={250} />
              )}
            </div>
          </li>
        </ul>
      </section>
    </MusicCardStyle>
  )
}

export default MusicCard
