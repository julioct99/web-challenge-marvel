import { useParams } from 'react-router-dom'

import ComicList from '../../components/ComicList'
import CharacterFavoriteButton from '../../components/CharacterFavoriteButton'

import { useCharacter } from '../../shared/hooks/use-character'
import { useComics } from '../../shared/hooks/use-comics'
import Loading from '../../shared/components/Loading'
import {
  CharacterDetailContainer,
  CharacterImage,
  CharacterDetailBody,
  CharacterDetailTitle,
} from './styles'

const CharacterDetail = () => {
  const params = useParams()
  const characterId = params.id ? parseInt(params.id) : null

  const { character, loading: characterIsLoading } = useCharacter(characterId)
  const { comics, loading: comicsAreLoading } = useComics(characterId)

  if (characterIsLoading) {
    return <Loading />
  }

  if (!character) {
    return <p>Character not found</p>
  }

  return (
    <>
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
    </>
  )
}

export default CharacterDetail
