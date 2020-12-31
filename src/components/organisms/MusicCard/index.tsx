import * as React from 'react'
import { MusicCardStyle } from './style'

import placeholder from '../../../assets/png/imgplh.png'

export interface CardProps {
  dark: boolean
}

const MusicCard: React.FC<CardProps> = ({ dark = false }) => {
  return (
    <MusicCardStyle dark={dark}>
      <section className="musics">
        <ul className="musics__list">
          <li className="musics__card">
            <div className="musics__card-img">
              <img src={placeholder} alt="album cover" />
              <small>Album Name</small>
            </div>
            <div className="musics__card-infos">
              <div className="musics__card-info">
                <div className=".musics__card-infos card__title">
                  <h2>Musica da Hora</h2>
                  <hr />
                  <small> Nome do Artista</small>
                </div>
                <div className="musics__card-item">
                  <h4>Duração: 325 min</h4>
                  <h4>Ranking: 1º</h4>
                </div>
              </div>
              <div className="musics__card-action">
                <button>{`>`}</button>
                <button>+</button>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </MusicCardStyle>
  )
}

export default MusicCard
