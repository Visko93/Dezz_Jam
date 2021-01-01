import * as React from 'react'
import { NotFoundRoot } from './style'

export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <NotFoundRoot dark={false}>
      <div className="main__app">
        <h1>Not Found</h1>
      </div>
    </NotFoundRoot>
  )
}

export default Home
