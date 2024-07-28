import { useContext } from 'react'

import styled from 'styled-components'

import Heart from '../../shared/icons/heart'
import HeartEmpty from '../../shared/icons/heart-empty'

import { FavoriteCharactersContext } from '../../context/favorite-characters'
import { Character } from '../../shared/types/marvel-api'

const ButtonContainer = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.25s ease-in-out;

  .card-container: hover & {
    .heart-icon {
      fill: var(--text-color-light);
    }

    .heart-icon-empty {
      fill: var(--text-color-dark);
    }
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
    useContext(FavoriteCharactersContext)

  const isFavorite = favoriteCharacters.some((c) => c.id === character.id)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    e.preventDefault()

    isFavorite ? removeFavoriteCharacter(character.id) : addFavoriteCharacter(character)
  }

  return (
    <ButtonContainer onClick={handleClick} className='favorite-button'>
      {isFavorite ? <Heart size={size} /> : <HeartEmpty size={size} />}
    </ButtonContainer>
  )
}

export default CharacterFavoriteButton
