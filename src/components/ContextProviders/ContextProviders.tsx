import CharacterContextProvider from '../../context/character'
import CharactersContextProvider from '../../context/characters'
import ComicsContextProvider from '../../context/comics'
import FavoriteCharactersContextProvider from '../../context/favorite-characters'

interface ContextProvidersProps {
  children: React.ReactNode
}

const ContextProviders: React.FunctionComponent<ContextProvidersProps> = ({
  children,
}) => {
  return (
    <FavoriteCharactersContextProvider>
      <CharactersContextProvider>
        <CharacterContextProvider>
          <ComicsContextProvider>{children}</ComicsContextProvider>
        </CharacterContextProvider>
      </CharactersContextProvider>
    </FavoriteCharactersContextProvider>
  )
}

export default ContextProviders
