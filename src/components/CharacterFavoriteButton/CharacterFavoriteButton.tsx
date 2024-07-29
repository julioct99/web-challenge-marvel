import { ButtonContainer } from './styles'
import { Character } from '../../shared/types/marvel-api'
import { FavoriteCharactersContext } from '../../context/favorite-characters'
import Heart from '../../shared/icons/heart'
import HeartEmpty from '../../shared/icons/heart-empty'
import { useContext } from 'react'

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
    <ButtonContainer
      onClick={handleClick}
      className='favorite-button'
      data-cy='favorite-button'
    >
      {isFavorite ? <Heart size={size} /> : <HeartEmpty size={size} />}
    </ButtonContainer>
  )
}

export default CharacterFavoriteButton
