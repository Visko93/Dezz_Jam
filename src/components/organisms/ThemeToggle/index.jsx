import * as React from 'react'

import { FiToggleLeft, FiToggleRight } from 'react-icons/fi'
import { ThemeToggleRoot } from './style'

const ThemeToggle = ({ props: { theme, handleTheme } }) => {
  return (
    <ThemeToggleRoot>
      <button onClick={handleTheme} className="btn">
        {theme ? (
          <FiToggleLeft
            size={25}
            className="icon"
            color={'#A0E02C'}
          />
        ) : (
          <FiToggleRight size={25} className="icon" />
        )}
      </button>
    </ThemeToggleRoot>
  )
}

export default ThemeToggle
