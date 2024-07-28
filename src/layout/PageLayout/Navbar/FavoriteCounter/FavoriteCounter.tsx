import { useContext } from 'react'

import { FavoriteCharactersContext } from '../../../../context/favorite-characters'
import { FavoriteCounterContainer, LinkContainer } from './styles'

import heart_icon from '/heart_icon.png'

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
