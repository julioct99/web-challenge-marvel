import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import styled from 'styled-components'

import { CharacterContext } from '../../context/character'
import ComicList from './ComicList/ComicList'

import { fetchCharacter, fetchCharacterComics } from '../../shared/api/fetchers'
import { Character, Comic } from '../../shared/types/marvel-api'
import CharacterFavoriteButton from '../../components/CharacterFavoriteButton/CharacterFavoriteButton'

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
  const [loading, setLoading] = useState(false)
  const { character, setCharacter, comics, setComics } = useContext(CharacterContext)

  const params = useParams()
  const characterId = params.id ? parseInt(params.id) : null

  useEffect(() => {
    Promise.all([loadCharacter(), loadComics()])
  }, [characterId])

  const loadCharacter = async () => {
    setLoading(true)

    try {
      if (!characterId) return
      const character = await fetchCharacter(characterId)
      setCharacter(character.data.results[0] as Character)
    } finally {
      setLoading(false)
    }
  }

  const loadComics = async () => {
    setLoading(true)

    try {
      if (!characterId) return
      const comics = await fetchCharacterComics(characterId)
      setComics(comics.data.results as Comic[])
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
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
              <CharacterFavoriteButton characterId={character.id} size={32} />
            </CharacterDetailTitle>
            <p>{character.description}</p>
          </CharacterDetailBody>
        </CharacterDetailContainer>
      </div>

      <ComicList comics={comics} />
    </div>
  )
}

export default CharacterDetail
