import { Route, Routes } from 'react-router-dom'

import PageLayout from './layout/PageLayout/PageLayout'
import Characters from './pages/Characters/Characters'
import CharacterDetail from './pages/CharacterDetail/CharacterDetail'
import ContextProviders from './components/ContextProviders/ContextProviders'
import FavoriteCharacters from './pages/FavoriteCharacters/FavoriteCharacters'

function App() {
  return (
    <ContextProviders>
      <PageLayout>
        <Routes>
          <Route path='/' element={<Characters />} />
          <Route path='/characters/:id' element={<CharacterDetail />} />
          <Route path='/favorites' element={<FavoriteCharacters />} />
        </Routes>
      </PageLayout>
    </ContextProviders>
  )
}

export default App
