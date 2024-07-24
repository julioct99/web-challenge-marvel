import { createContext, useState } from 'react'

import { Character } from '../shared/types/marvel-api'

interface CharacterContext {
  characters: Character[]
  setCharacters: (characters: Character[]) => void
}

export const CharactersContext = createContext<CharacterContext>({
  characters: [],
  setCharacters: () => {},
})

interface CharactersContextProviderProps {
  children: React.ReactNode
}

const CharactersContextProvider: React.FunctionComponent<
  CharactersContextProviderProps
> = ({ children }) => {
  const [characters, setCharacters] = useState<Character[]>([])

  const getContextValue = (): CharacterContext => {
    return {
      characters,
      setCharacters,
    }
  }

  return (
    <CharactersContext.Provider value={getContextValue()}>
      {children}
    </CharactersContext.Provider>
  )
}

export default CharactersContextProvider
