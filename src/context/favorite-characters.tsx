import { createContext, useEffect, useState } from 'react'

const LOCAL_STORAGE_KEY = 'favoriteCharacters'

interface CharacterContext {
  favoriteCharacters: number[]
  addFavoriteCharacter: (id: number) => void
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
  const [favoriteCharacters, setFavoriteCharacters] = useState<number[]>([])

  useEffect(() => {
    loadFavoriteCharacters()
  }, [])

  const addFavoriteCharacter = (id: number) => {
    if (favoriteCharacters.includes(id)) return

    const newFavoriteCharacters = [...favoriteCharacters, id]
    updateFavoriteList(newFavoriteCharacters)
  }

  const removeFavoriteCharacter = (id: number) => {
    const newFavoriteCharacters = favoriteCharacters.filter((c) => c !== id)
    updateFavoriteList(newFavoriteCharacters)
  }

  const updateFavoriteList = (favoriteCharacters: number[]) => {
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
