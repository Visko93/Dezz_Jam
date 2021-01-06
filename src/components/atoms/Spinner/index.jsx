import * as React from 'react';
import { WaveBase } from './style';

const Spinner = ({ dark = false }) => {
  return (
    <WaveBase dark={dark}>
      <div id="spinner"></div>
    </WaveBase>
  );
};

export default Spinner;
