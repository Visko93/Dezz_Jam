import * as React from 'react';
import { Link } from 'react-router-dom';

import ReactAudioPlayer from 'react-audio-player';
import SkeletonPlaceholder from '../../atoms/Skeleton';
import {
  FiPlay,
  FiPlus,
  FiMinus,
  FiExternalLink,
  FiPause,
} from 'react-icons/fi';

import { MusicCardStyle } from './style';
import placeholder from '../../../assets/png/imgplh.png';

const MusicCard = ({
  dark = false,
  favorite = false,
  isLoaded,
  handleRemoveFav,
  handleAddFav,
  music: {
    id,
    coverImg,
    albumTitle,
    artistName,
    title,
    duration,
    position,
    link,
    preview,
  },
  props,
}) => {
  const [playing, setPlaying] = React.useState(false);

  if (!isLoaded) return <SkeletonPlaceholder dark={dark} />;
  return (
    <MusicCardStyle dark={dark}>
      <section className="musics">
        <ul className="musics__list">
          <li className="musics__card">
            <div className="musics__card-img">
              <img src={coverImg} alt="album cover" />
              <small>{albumTitle}</small>
            </div>
            <div className="musics__card-infos">
              <div className="musics__card-info">
                <div className=".musics__card-infos card__title">
                  <h2>{title} </h2>
                  <hr />
                  <small>{artistName}</small>
                </div>
                <div className="musics__card-item">
                  <h4>{`Duração: ${duration} min`}</h4>
                  <h4>{`Ranking: ${position} º`}</h4>
                </div>
              </div>
              <ReactAudioPlayer
                color={'blue'}
                controlsList="nodownload"
                src={preview}
                controls
              />
              <div className="musics__card-action">
                <a href={link} target="_blank" rel="noreferrer">
                  <button>
                    <FiExternalLink
                      size={20}
                      fill={'white'}
                      color={'white'}
                    />
                  </button>
                </a>
                {favorite ? (
                  <button onClick={handleRemoveFav} id={id}>
                    <FiMinus
                      name="add"
                      size={20}
                      fill={'white'}
                      color={'white'}
                    />
                  </button>
                ) : (
                  <button onClick={handleAddFav} id={id}>
                    <FiPlus
                      name="remove"
                      size={20}
                      fill={'white'}
                      color={'white'}
                    />
                  </button>
                )}
              </div>
            </div>
          </li>
        </ul>
      </section>
    </MusicCardStyle>
  );
};

export default MusicCard;
