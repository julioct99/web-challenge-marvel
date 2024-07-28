import styled from 'styled-components'

export const CharacterDetailContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  background-color: black;
  color: white;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;

    .character-image {
      width: '100%';
      height: 'auto';
    }
  }
`

export const CharacterDetailBody = styled.div`
  padding: 32px;
`

export const CharacterImage = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 1 / 1;
  object-fit: cover;
`

export const CharacterDetailTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
