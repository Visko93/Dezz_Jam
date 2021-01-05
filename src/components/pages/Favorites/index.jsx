import * as React from 'react';
import PropTypes from 'prop-types';
import { HomeRoot } from './style';

import MusicCard from '../../organisms/MusicCard';
import Header from '../../organisms/Header';
import SearchInput from '../../organisms/SearchInput';
import LoadMore from '../../atoms/LoadMoreButton';
import SkeletonPlaceholder from '../../atoms/Skeleton';

import { connect, useStore } from 'react-redux';
import * as favoriteActions from '../../../redux/actions/addFavorite';
import { bindActionCreators } from 'redux';

const Favorite = ({ dark }) => {
  const [query, setQuery] = React.useState('');
  const [param, setParam] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [favorites, setFavorites] = React.useState([]);

  const store = useStore();
  React.useEffect(() => {
    setFavorites(store.getState().favorites);
  }, [store]);

  const handleChange = (e) => {
    const { value } = e.target;
    setQuery(value);
  };

  const handleRemoveFav = (e) => {
    e.preventDefault();
    const { id } = e.target;
    if (!favorites) return;
    const removedMusic = favorites.filter(
      (item) => item.id !== parseInt(id),
    );
    store.dispatch(favoriteActions.removeFavorite(removedMusic));
  };

  const handleLoadMore = (e) => {};

  return (
    <HomeRoot dark={dark}>
      <div className="main__app">
        <Header />
        <SearchInput props={{ dark, query, handleChange }} />
        {/* Card renderinf must be abstracted */}
        <h1>Meus Favoritos</h1>
        <section className="musics">
          <ul className="musics__list">
            {favorites.map((item) => {
              const msState = {
                id: item[0].id,
                coverImg: item[0].album.cover_medium,
                albumTitle: item[0].album.title,
                artistName: item[0].artist.name,
                title: item[0].title,
                duration: item[0].duration,
                position: item[0].position,
                link: item[0].link,
                preview: item[0].preview,
              };

              return loading ? (
                <SkeletonPlaceholder dark={dark} />
              ) : (
                <MusicCard
                  dark={dark}
                  favorite
                  handleRemoveFav={handleRemoveFav}
                  music={msState}
                  isLoaded={msState ? true : false}
                  key={msState.id}
                />
              );
            })}
          </ul>
        </section>
        {/* End of card list component */}
      </div>
      <LoadMore props={{ handleLoadMore, dark }} />
    </HomeRoot>
  );
};

Favorite.protoTypes = {
  dispatch: PropTypes.func.isRequired,
  favorites: PropTypes.array.isRequired,
  dark: PropTypes.bool,
};

function mapStateToProps(favorite) {
  return {
    favorite,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      favoriteActions.removeFavorite,
      dispatch,
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorite);
