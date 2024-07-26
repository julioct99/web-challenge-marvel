import styled from 'styled-components'

import heart_icon from '/heart_icon.png'
import { useContext } from 'react'
import { favoriteCharactersContext } from '../../../../context/favorite-characters'

const FavoriteCounterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const FavoriteCounter = () => {
  const { favoriteCharacters } = useContext(favoriteCharactersContext)

  return (
    <FavoriteCounterContainer>
      <img src={heart_icon} alt='Favorite icon' />
      <span>{favoriteCharacters.length}</span>
    </FavoriteCounterContainer>
  )
}

export default FavoriteCounter
