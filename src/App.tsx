import CharactersContextProvider from './context/characters'
import PageLayout from './layout/PageLayout/PageLayout'
import CharacterList from './pages/CharacterList'

function App() {
  return (
    <CharactersContextProvider>
      <PageLayout>
        <CharacterList />
      </PageLayout>
    </CharactersContextProvider>
  )
}

export default App
