import { Link } from 'react-router-dom'

import styled from 'styled-components'

import FavoriteCounter from './FavoriteCounter/FavoriteCounter'

import marvelLogo from '/marvel-logo.png'

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 64px;
  height: 50px;
  background-color: var(--secondary-color);
  color: var(--text-color-light);
  border-bottom: 1px solid var(--bg-color);
`

const LogoContainer = styled.div`
  height: 100%;
`

const Logo = styled.img`
  height: 100%;
`

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
