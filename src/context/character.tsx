import {
  createContext,
  useState,
  ReactNode,
  FunctionComponent,
  useEffect,
  useContext,
} from 'react'
import { Character } from '../shared/types/marvel-api'
import { fetchCharacter } from '../shared/api/fetchers'

interface CharacterContextType {
  character: Character | null
  setCharacter: React.Dispatch<React.SetStateAction<Character | null>>
  loadCharacter: (characterId: number) => void
  loading: boolean
}

export const CharacterContext = createContext<CharacterContextType>({
  character: null,
  setCharacter: () => {},
  loadCharacter: () => {},
  loading: false,
})

interface CharacterContextProviderProps {
  children: ReactNode
}

const CharacterContextProvider: FunctionComponent<CharacterContextProviderProps> = ({
  children,
}) => {
  const [character, setCharacter] = useState<Character | null>(null)
  const [loading, setLoading] = useState(false)

  const loadCharacter = async (characterId: number) => {
    setLoading(true)

    try {
      if (!characterId) return
      const character = await fetchCharacter(characterId)
      setCharacter(character.data.results[0] as Character)
    } finally {
      setLoading(false)
    }
  }

  const getContextValue = (): CharacterContextType => ({
    character,
    setCharacter,
    loadCharacter,
    loading,
  })

  return (
    <CharacterContext.Provider value={getContextValue()}>
      {children}
    </CharacterContext.Provider>
  )
}

export default CharacterContextProvider

export const useCharacter = (characterId: number | null) => {
  const { character, loadCharacter, loading, ...rest } = useContext(CharacterContext)

  useEffect(() => {
    if (!characterId) return
    loadCharacter(characterId)
  }, [characterId])

  return { character, loading, loadCharacter, ...rest }
}
