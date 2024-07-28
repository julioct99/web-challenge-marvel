import CharacterFavoriteButton from '../CharacterFavoriteButton'

import { Character } from '../../shared/types/marvel-api'
import {
  CardLink,
  CardContainer,
  Thumbnail,
  CardBody,
  BodyBackgroundContainer,
  NameContainer,
} from './styles'

interface CharacterCardProps {
  character: Character
}

const CharacterCard: React.FunctionComponent<CharacterCardProps> = ({ character }) => {
  const { path, extension } = character.thumbnail
  const thumbnail = `${path}.${extension}`

  return (
    <CardLink to={`/characters/${character.id}`}>
      <CardContainer className='card-container'>
        <Thumbnail src={thumbnail} alt={character.name} />
        <CardBody>
          <BodyBackgroundContainer>
            <NameContainer>
              <span>{character.name}</span>
              <CharacterFavoriteButton size={14} character={character} />
            </NameContainer>
          </BodyBackgroundContainer>
        </CardBody>
      </CardContainer>
    </CardLink>
  )
}

export default CharacterCard
