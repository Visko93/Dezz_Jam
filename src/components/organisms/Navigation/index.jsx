import * as React from 'react'
import { NavLink } from 'react-router-dom'
import { NavigationRoot } from './style'

const Navigation = ({ dark = false }) => {
  return (
    <NavigationRoot dark={dark}>
      <div className="nav">
        <ul className="nav__container">
          <li className="nav__container-item">
            <NavLink to="/">Explore</NavLink>
          </li>
          <li className="nav__container-item">
            <NavLink to="/favorites">Favorites</NavLink>
          </li>
        </ul>
      </div>
    </NavigationRoot>
  )
}

export default Navigation
