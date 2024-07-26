import { Link } from 'react-router-dom'

import styled from 'styled-components'

import { Character } from '../../shared/types/marvel-api'

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  cursor: pointer;
`

const CardBody = styled.div`
  -webkit-clip-path: polygon(
    100% 0,
    100% calc(100% - 16px),
    calc(100% - 16px) 100%,
    0 100%,
    0 0
  );
  clip-path: polygon(100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 0);
  background: black;
  color: whitesmoke;
  height: 64px;
  font-size: 14px;
`

const Thumbnail = styled.img`
  width: 100%;
  height: 225px;
  object-fit: cover;
`

const BodyBackgroundContainer = styled.div`
  background: red;
  width: 100%;
  height: 6px;
  transition: height 0.35s;

  .card-container:hover & {
    height: 100%;
  }
`

const TextContainer = styled.div`
  padding: 16px;
`

const CardLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

interface CharacterCardProps {
  character: Character
}

const CharacterCard: React.FunctionComponent<CharacterCardProps> = ({ character }) => {
  const thumbnail = `${character.thumbnail.path}.${character.thumbnail.extension}`

  return (
    <CardLink to={`/characters/${character.id}`}>
      <CardContainer className='card-container'>
        <Thumbnail src={thumbnail} alt={character.name} />
        <CardBody>
          <BodyBackgroundContainer>
            <TextContainer>
              <span>{character.name}</span>
            </TextContainer>
          </BodyBackgroundContainer>
        </CardBody>
      </CardContainer>
    </CardLink>
  )
}

export default CharacterCard
