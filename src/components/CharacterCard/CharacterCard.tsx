import { Link } from 'react-router-dom'

import styled from 'styled-components'

import CharacterFavoriteButton from '../CharacterFavoriteButton/CharacterFavoriteButton'

import { Character } from '../../shared/types/marvel-api'

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  cursor: pointer;
`

const CardBody = styled.div`
  -webkit-clip-path: var(--dent-clip-path);
  clip-path: var(--dent-clip-path);
  background: var(--secondary-color);
  color: var(--text-color-light);
  height: 64px;
  font-size: 14px;
`

const Thumbnail = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 1 / 1;
  object-fit: cover;
`

const BodyBackgroundContainer = styled.div`
  background-color: var(--primary-color);
  width: 100%;
  height: 6px;
  transition: height 0.25s ease-in-out;

  .card-container:hover & {
    height: 100%;
  }
`

const NameContainer = styled.div`
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const CardLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

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
