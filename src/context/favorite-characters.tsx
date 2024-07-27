import { createContext, useEffect, useState } from 'react'

import { Character } from '../shared/types/marvel-api'

const LOCAL_STORAGE_KEY = 'favoriteCharacters'

interface CharacterContext {
  favoriteCharacters: Character[]
  addFavoriteCharacter: (character: Character) => void
  removeFavoriteCharacter: (id: number) => void
}

export const favoriteCharactersContext = createContext<CharacterContext>({
  favoriteCharacters: [],
  addFavoriteCharacter: () => {},
  removeFavoriteCharacter: () => {},
})

interface FavoriteCharactersContextProviderProps {
  children: React.ReactNode
}

const FavoriteCharactersContextProvider: React.FunctionComponent<
  FavoriteCharactersContextProviderProps
> = ({ children }) => {
  const [favoriteCharacters, setFavoriteCharacters] = useState<Character[]>([])

  useEffect(() => {
    loadFavoriteCharacters()
  }, [])

  const addFavoriteCharacter = (character: Character) => {
    if (favoriteCharacters.find((c) => c.id === character.id)) return

    const newFavoriteCharacters = [...favoriteCharacters, character]
    updateFavoriteList(newFavoriteCharacters)
  }

  const removeFavoriteCharacter = (id: number) => {
    const newFavoriteCharacters = favoriteCharacters.filter((c) => c.id !== id)
    updateFavoriteList(newFavoriteCharacters)
  }

  const updateFavoriteList = (favoriteCharacters: Character[]) => {
    setFavoriteCharacters(favoriteCharacters)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(favoriteCharacters))
  }

  const loadFavoriteCharacters = () => {
    const favoriteCharacters = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (favoriteCharacters) {
      setFavoriteCharacters(JSON.parse(favoriteCharacters))
    }
  }

  const getContextValue = (): CharacterContext => {
    return {
      favoriteCharacters,
      addFavoriteCharacter,
      removeFavoriteCharacter,
    }
  }

  return (
    <favoriteCharactersContext.Provider value={getContextValue()}>
      {children}
    </favoriteCharactersContext.Provider>
  )
}

export default FavoriteCharactersContextProvider
