import { Route, Routes } from 'react-router-dom'

import PageLayout from './layout/PageLayout/PageLayout'
import CharacterList from './pages/CharacterList/CharacterList'
import CharacterDetail from './pages/CharacterDetail/CharacterDetail'
import ContextProviders from './components/ContextProviders/ContextProviders'

function App() {
  return (
    <ContextProviders>
      <PageLayout>
        <Routes>
          <Route path='/' element={<CharacterList />} />
          <Route path='/characters/:id' element={<CharacterDetail />} />
        </Routes>
      </PageLayout>
    </ContextProviders>
  )
}

export default App
