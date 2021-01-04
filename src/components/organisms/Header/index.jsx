import * as React from 'react'
import { HeaderRoot } from './style'
import useMusicsSearch from '../../../hooks/useMusicsSearch'

import logo from '../../../assets/svg/logo_dezz.svg'

const Header = () => {
  return (
    <HeaderRoot>
      <header className="header">
        <img className="header__logo" src={logo} alt="log da dezz" />
      </header>
    </HeaderRoot>
  )
}

export default Header
