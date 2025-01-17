import { CharacterDetail, Characters, FavoriteCharacters, NotFound } from './pages'
import { Route, Routes } from 'react-router-dom'

import ContextProviders from './components/ContextProviders'
import PageLayout from './layout/PageLayout'

function App() {
  return (
    <ContextProviders>
      <PageLayout>
        <Routes>
          <Route path='/' element={<Characters />} />
          <Route path='/characters/:id' element={<CharacterDetail />} />
          <Route path='/favorites' element={<FavoriteCharacters />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </PageLayout>
    </ContextProviders>
  )
}

export default App
