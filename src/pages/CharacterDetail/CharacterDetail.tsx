import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { CharacterContext } from '../../context/character'
import { fetchCharacter } from '../../shared/api/fetchers'

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
    <div>
      <h1>{character?.name}</h1>
      <pre>{JSON.stringify(character, null, 2)}</pre>
    </div>
  )
}

export default CharacterDetail
