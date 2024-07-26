import { Route, Routes } from 'react-router-dom'

import PageLayout from './layout/PageLayout/PageLayout'
import CharacterList from './pages/CharacterList/CharacterList'
import CharacterDetail from './pages/CharacterDetail/CharacterDetail'
import CharactersContextProvider from './context/characters'
import CharacterContextProvider from './context/character'
import FavoriteCharactersContextProvider from './context/favorite-characters'

function App() {
  return (
    <FavoriteCharactersContextProvider>
      <PageLayout>
        <Routes>
          <Route
            path='/'
            element={
              <CharactersContextProvider>
                <CharacterList />
              </CharactersContextProvider>
            }
          />
          <Route
            path='/characters/:id'
            element={
              <CharacterContextProvider>
                <CharacterDetail />
              </CharacterContextProvider>
            }
          />
        </Routes>
      </PageLayout>
    </FavoriteCharactersContextProvider>
  )
}

export default App
