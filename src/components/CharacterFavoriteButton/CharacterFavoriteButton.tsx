import { useContext } from 'react'

import styled from 'styled-components'

import { favoriteCharactersContext } from '../../context/favorite-characters'
import { Character } from '../../shared/types/marvel-api'

import heart_icon from '/heart_icon.png'
import heart_icon_empty from '/heart_icon_white.png'

const ButtonContainer = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.25s ease-in-out;

  .card-container: hover & {
    filter: invert(1);
  }
`

interface CharacterFavoriteButtonProps {
  character: Character
  size?: number
}

const CharacterFavoriteButton: React.FunctionComponent<CharacterFavoriteButtonProps> = ({
  character,
  size,
}) => {
  const { favoriteCharacters, addFavoriteCharacter, removeFavoriteCharacter } =
    useContext(favoriteCharactersContext)

  const isFavorite = favoriteCharacters.some((c) => c.id === character.id)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    e.preventDefault()

    isFavorite ? removeFavoriteCharacter(character.id) : addFavoriteCharacter(character)
  }

  const src = isFavorite ? heart_icon : heart_icon_empty

  return (
    <ButtonContainer onClick={handleClick} className='favorite-button'>
      <img src={src} height={size} alt='Button' />
    </ButtonContainer>
  )
}

export default CharacterFavoriteButton
