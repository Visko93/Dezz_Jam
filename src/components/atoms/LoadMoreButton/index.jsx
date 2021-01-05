import * as React from 'react';
import { LoadMoreButton } from './style';

const LoadMore = ({ props: { handleLoadMore, dark } }) => {
  return (
    <LoadMoreButton dark={dark}>
      <button className="btn" onClick={handleLoadMore}>
        Load More
      </button>
    </LoadMoreButton>
  );
};

export default LoadMore;
