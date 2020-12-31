import * as React from 'react'
import { WaveBase } from './style'

interface SoundWaveProps {
  canvas: HTMLCanvasElement
}

const SoundWave: React.FC<SoundWaveProps> = () => {
  return (
    <WaveBase>
      <canvas id="canvas"></canvas>
    </WaveBase>
  )
}

export default SoundWave
