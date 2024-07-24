import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import styled from 'styled-components'

import { CharacterContext } from '../../context/character'
import { fetchCharacter } from '../../shared/api/fetchers'

const CharacterDetailContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  background-color: black;
  color: white;
  max-width: 1200px;
  margin: 0 auto;
`

const CharacterDetailBody = styled.div`
  padding: 32px;
`

const CharacterDetail = () => {
  const [loading, setLoading] = useState(false)
  const { character, setCharacter } = useContext(CharacterContext)

  const params = useParams()
  const characterId = params.id ? parseInt(params.id) : null

  useEffect(() => {
    loadCharacter()
  }, [characterId])

  const loadCharacter = async () => {
    setLoading(true)

    try {
      if (!characterId) return
      const character = await fetchCharacter(characterId)
      setCharacter(character.data.results[0])
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
            <img
              height={300}
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt={character.name}
            />
          </div>
          <CharacterDetailBody>
            <h1>{character.name}</h1>
            <p>{character.description}</p>
          </CharacterDetailBody>
        </CharacterDetailContainer>
      </div>
    </div>
  )
}

export default CharacterDetail
