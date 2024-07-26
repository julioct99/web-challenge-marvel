import { createContext, useState, ReactNode, FunctionComponent } from 'react'
import { Comic } from '../shared/types/marvel-api'
import { fetchCharacterComics } from '../shared/api/fetchers'

interface ComicsContextType {
  comics: Comic[]
  setComics: React.Dispatch<React.SetStateAction<Comic[]>>
  loadComics: (characterId: number) => void
  loading: boolean
}

export const ComicsContext = createContext<ComicsContextType>({
  comics: [],
  setComics: () => {},
  loadComics: () => {},
  loading: false,
})

interface ComicsContextProviderProps {
  children: ReactNode
}

const ComicsContextProvider: FunctionComponent<ComicsContextProviderProps> = ({
  children,
}) => {
  const [comics, setComics] = useState<Comic[]>([])
  const [loading, setLoading] = useState(false)

  const loadComics = async (characterId: number) => {
    setLoading(true)

    try {
      if (!characterId) return
      const comics = await fetchCharacterComics(characterId)
      setComics(comics.data.results as Comic[])
    } finally {
      setLoading(false)
    }
  }

  const getContextValue = (): ComicsContextType => ({
    comics,
    setComics,
    loadComics,
    loading,
  })

  return (
    <ComicsContext.Provider value={getContextValue()}>{children}</ComicsContext.Provider>
  )
}

export default ComicsContextProvider
