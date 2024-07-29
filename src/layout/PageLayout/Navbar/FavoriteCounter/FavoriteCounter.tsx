import { FavoriteCounterContainer, LinkContainer } from './styles'

import { FavoriteCharactersContext } from '../../../../context/favorite-characters'
import heart_icon from '/heart_icon.png'
import { useContext } from 'react'

const FavoriteCounter = () => {
  const { favoriteCharacters } = useContext(FavoriteCharactersContext)

  return (
    <LinkContainer to='/favorites'>
      <FavoriteCounterContainer>
        <img src={heart_icon} alt='Favorite icon' />
        <span data-cy='favorite-characters-counter'>{favoriteCharacters.length}</span>
      </FavoriteCounterContainer>
    </LinkContainer>
  )
}

export default FavoriteCounter
