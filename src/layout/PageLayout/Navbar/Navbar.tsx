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
  background-color: black;
  color: white;
`

const Navbar = () => {
  return (
    <NavbarContainer>
      <div style={{ height: '100%' }}>
        <Link to='/'>
          <img height='100%' src={marvelLogo} alt='Marvel logo' />
        </Link>
      </div>
      <FavoriteCounter />
    </NavbarContainer>
  )
}

export default Navbar
