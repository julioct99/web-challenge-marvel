import styled from 'styled-components'
import { Character } from '../../shared/types/marvel-api'
import { Link } from 'react-router-dom'

interface CharacterCardProps {
  character: Character
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: space-between;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
`

const CardBody = styled.div`
  padding: 10px;
`

const CharacterCard: React.FunctionComponent<CharacterCardProps> = ({ character }) => {
  const thumbnail = `${character.thumbnail.path}.${character.thumbnail.extension}`

  return (
    <Link
      to={`/characters/${character.id}`}
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <CardContainer>
        <img width='100%' src={thumbnail} alt='Placeholder' />
        <CardBody>
          <span>{character.name}</span>
        </CardBody>
      </CardContainer>
    </Link>
  )
}

export default CharacterCard
