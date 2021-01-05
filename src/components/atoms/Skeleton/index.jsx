import * as React from 'react'
import Skeleton from 'react-loading-skeleton'

import { MusicCardStyle } from '../../organisms/MusicCard/style'

const SkeletonPlaceholder = ({ dark }) => {
  return (
    <MusicCardStyle dark={dark}>
      <section className="musics">
        <ul className="musics__list">
          <li className="musics__card">
            <div className="musics__card-img">
              <Skeleton height={200} />
              <Skeleton width={50} />
            </div>
            <div className="musics__card-infos">
              <div className="musics__card-info">
                <div className=".musics__card-infos card__title">
                  <Skeleton />
                  <hr />
                  <small>
                    <Skeleton />
                  </small>
                </div>
                <div className="musics__card-item">
                  <h4>
                    <Skeleton width={250} />
                  </h4>
                  <h4>
                    <Skeleton width={250} />
                  </h4>
                </div>
              </div>
              <div className="musics__card-action">
                <button>
                  <Skeleton circle />
                </button>
                <button>
                  <Skeleton circle />
                </button>
              </div>

              <Skeleton height={30} width={250} />
            </div>
          </li>
        </ul>
      </section>
    </MusicCardStyle>
  )
}

export default SkeletonPlaceholder
