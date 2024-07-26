import { createContext, useEffect, useState } from 'react'

import { Character, CharacterQueryParams } from '../shared/types/marvel-api'
import { fetchCharacters } from '../shared/api/fetchers'

interface CharacterContextType {
  characters: Character[]
  setCharacters: React.Dispatch<React.SetStateAction<Character[]>>
  loadCharacters: (params: CharacterQueryParams) => void
  loading: boolean
}

export const CharactersContext = createContext<CharacterContextType>({
  characters: [],
  setCharacters: () => {},
  loadCharacters: () => {},
  loading: false,
})

interface CharactersContextProviderProps {
  children: React.ReactNode
}

const CharactersContextProvider: React.FunctionComponent<
  CharactersContextProviderProps
> = ({ children }) => {
  const [characters, setCharacters] = useState<Character[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    loadCharacters()
  }, [])

  const loadCharacters = async (params: CharacterQueryParams = {}) => {
    setLoading(true)
    try {
      const characters = await fetchCharacters(params)
      setCharacters(characters.data.results as Character[])
    } finally {
      setLoading(false)
    }
  }

  const getContextValue = (): CharacterContextType => {
    return {
      characters,
      setCharacters,
      loadCharacters,
      loading,
    }
  }

  return (
    <CharactersContext.Provider value={getContextValue()}>
      {children}
    </CharactersContext.Provider>
  )
}

export default CharactersContextProvider
