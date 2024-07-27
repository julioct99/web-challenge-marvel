import { useParams } from 'react-router-dom'

import styled from 'styled-components'

import ComicList from './ComicList/ComicList'
import CharacterFavoriteButton from '../../components/CharacterFavoriteButton/CharacterFavoriteButton'

import { useCharacter } from '../../shared/hooks/use-character'
import { useComics } from '../../shared/hooks/use-comics'

const CharacterDetailContainer = styled.div`
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

const CharacterDetailBody = styled.div`
  padding: 32px;
`

const CharacterImage = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 1 / 1;
  object-fit: cover;
`

const CharacterDetailTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const CharacterDetail = () => {
  const params = useParams()
  const characterId = params.id ? parseInt(params.id) : null

  const { character, loading: characterIsLoading } = useCharacter(characterId)
  const { comics, loading: comicsAreLoading } = useComics(characterId)

  if (characterIsLoading) {
    return <p>Loading...</p>
  }

  if (!character) {
    return <p>Character not found</p>
  }

  return (
    <div style={{ borderTop: '1px solid darkgray' }}>
      <div style={{ backgroundColor: 'black' }}>
        <CharacterDetailContainer>
          <div>
            <CharacterImage
              className='character-image'
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt={character.name}
            />
          </div>
          <CharacterDetailBody>
            <CharacterDetailTitle>
              <h1>{character.name}</h1>
              <CharacterFavoriteButton character={character} size={32} />
            </CharacterDetailTitle>
            <p>{character.description}</p>
          </CharacterDetailBody>
        </CharacterDetailContainer>
      </div>

      <ComicList comics={comics} loading={comicsAreLoading} />
    </div>
  )
}

export default CharacterDetail
