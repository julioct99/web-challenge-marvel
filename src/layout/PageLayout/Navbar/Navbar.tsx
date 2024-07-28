import { Link } from 'react-router-dom'

import FavoriteCounter from './FavoriteCounter'

import { NavbarContainer, LogoContainer, Logo } from './styles'

import marvelLogo from '/marvel-logo.png'

const Navbar = () => {
  return (
    <NavbarContainer>
      <LogoContainer>
        <Link to='/'>
          <Logo src={marvelLogo} alt='Marvel logo' />
        </Link>
      </LogoContainer>
      <FavoriteCounter />
    </NavbarContainer>
  )
}

export default Navbar
