import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import PageLayout from './layout/PageLayout/PageLayout'
import CharacterList from './pages/CharacterList/CharacterList'
import CharacterDetail from './pages/CharacterDetail/CharacterDetail'
import CharactersContextProvider from './context/characters'
import CharacterContextProvider from './context/character'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <CharactersContextProvider>
        <CharacterList />
      </CharactersContextProvider>
    ),
  },
  {
    path: '/characters/:id',
    element: (
      <CharacterContextProvider>
        <CharacterDetail />
      </CharacterContextProvider>
    ),
  },
])

function App() {
  return (
    <PageLayout>
      <RouterProvider router={router} />
    </PageLayout>
  )
}

export default App
