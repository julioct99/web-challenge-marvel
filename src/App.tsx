import { Route, Routes } from 'react-router-dom'

import ContextProviders from './components/ContextProviders/ContextProviders'
import PageLayout from './layout/PageLayout'
import { CharacterDetail, Characters, FavoriteCharacters } from './pages'

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
