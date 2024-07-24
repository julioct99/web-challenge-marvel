import { createContext, useState, ReactNode, FunctionComponent } from 'react'
import { Character } from '../shared/types/marvel-api'

interface CharacterContextType {
  character: Character | null
  setCharacter: React.Dispatch<React.SetStateAction<Character | null>>
}

export const CharacterContext = createContext<CharacterContextType>({
  character: null,
  setCharacter: () => {},
})

interface CharacterContextProviderProps {
  children: ReactNode
}

const CharacterContextProvider: FunctionComponent<CharacterContextProviderProps> = ({
  children,
}) => {
  const [character, setCharacter] = useState<Character | null>(null)

  const getContextValue = (): CharacterContextType => ({
    character,
    setCharacter,
  })

  return (
    <CharacterContext.Provider value={getContextValue()}>
      {children}
    </CharacterContext.Provider>
  )
}

export default CharacterContextProvider
