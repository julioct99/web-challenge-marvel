import {
  CharacterDetailBackground,
  CharacterDetailBody,
  CharacterDetailContainer,
  CharacterDetailTitle,
  CharacterImage,
} from './styles'

import CharacterFavoriteButton from '../../components/CharacterFavoriteButton'
import ComicList from '../../components/ComicList'
import Loading from '../../shared/components/Loading'
import { useCharacter } from '../../shared/hooks/use-character'
import { useComics } from '../../shared/hooks/use-comics'
import { useParams } from 'react-router-dom'

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
    <section data-cy='character-detail'>
      <CharacterDetailBackground>
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
              <h1 data-cy='character-name'>{character.name}</h1>
              <CharacterFavoriteButton character={character} size={32} />
            </CharacterDetailTitle>
            <p data-cy='character-description'>{character.description}</p>
          </CharacterDetailBody>
        </CharacterDetailContainer>
      </CharacterDetailBackground>

      <ComicList comics={comics} loading={comicsAreLoading} />
    </section>
  )
}

export default CharacterDetail
