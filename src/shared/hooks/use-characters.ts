import { useContext, useEffect } from 'react'

import { CharactersContext } from '../../context/characters'

export const useCharacters = () => {
  const { characters, loadCharacters, loading, ...rest } = useContext(CharactersContext)

  useEffect(() => {
    loadCharacters({})
  }, [loadCharacters])

  return { characters, loadCharacters, loading, ...rest }
}
