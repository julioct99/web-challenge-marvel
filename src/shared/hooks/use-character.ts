import { useContext, useEffect } from 'react'

import { CharacterContext } from '../../context/character'

export const useCharacter = (characterId: number | null) => {
  const { character, loadCharacter, loading, ...rest } = useContext(CharacterContext)

  useEffect(() => {
    if (!characterId) return
    loadCharacter(characterId)
  }, [characterId, loadCharacter])

  return { character, loading, loadCharacter, ...rest }
}
