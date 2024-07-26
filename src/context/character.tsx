import { createContext, useState, ReactNode, FunctionComponent } from 'react'
import { Character, Comic } from '../shared/types/marvel-api'

interface CharacterContextType {
  character: Character | null
  setCharacter: React.Dispatch<React.SetStateAction<Character | null>>
  comics: Comic[]
  setComics: React.Dispatch<React.SetStateAction<Comic[]>>
}

export const CharacterContext = createContext<CharacterContextType>({
  character: null,
  setCharacter: () => {},
  comics: [],
  setComics: () => {},
})

interface CharacterContextProviderProps {
  children: ReactNode
}

const CharacterContextProvider: FunctionComponent<CharacterContextProviderProps> = ({
  children,
}) => {
  const [character, setCharacter] = useState<Character | null>(null)
  const [comics, setComics] = useState<Comic[]>([])

  const getContextValue = (): CharacterContextType => ({
    character,
    setCharacter,
    comics,
    setComics,
  })

  return (
    <CharacterContext.Provider value={getContextValue()}>
      {children}
    </CharacterContext.Provider>
  )
}

export default CharacterContextProvider
