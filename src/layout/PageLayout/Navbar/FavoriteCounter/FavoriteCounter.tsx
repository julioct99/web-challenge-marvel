import styled from 'styled-components'

import heart_icon from '/heart_icon.png'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FavoriteCharactersContext } from '../../../../context/favorite-characters'

const LinkContainer = styled(Link)`
  text-decoration: none;
  color: inherit;
`

const FavoriteCounterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const FavoriteCounter = () => {
  const { favoriteCharacters } = useContext(FavoriteCharactersContext)

  return (
    <LinkContainer to='/favorites'>
      <FavoriteCounterContainer>
        <img src={heart_icon} alt='Favorite icon' />
        <span>{favoriteCharacters.length}</span>
      </FavoriteCounterContainer>
    </LinkContainer>
  )
}

export default FavoriteCounter
