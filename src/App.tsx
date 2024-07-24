import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CharactersContextProvider from './context/characters'
import PageLayout from './layout/PageLayout/PageLayout'
import CharacterList from './pages/CharacterList/CharacterList'
import CharacterDetail from './pages/CharacterDetail/CharacterDetail'

const router = createBrowserRouter([
  {
    path: '/',
    element: <CharacterList />,
  },
  {
    path: '/characters/:id',
    element: <CharacterDetail />,
  },
])

function App() {
  return (
    <CharactersContextProvider>
      <PageLayout>
        <RouterProvider router={router} />
      </PageLayout>
    </CharactersContextProvider>
  )
}

export default App
