import styled from 'styled-components'

interface CharacterCardProps {
  character: any
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
`

const CharacterCard: React.FunctionComponent<CharacterCardProps> = ({ character }) => {
  return (
    <CardContainer>
      <img width='100%' src='https://placehold.co/200' alt='Placeholder' />
      <span>Name</span>
    </CardContainer>
  )
}

export default CharacterCard
