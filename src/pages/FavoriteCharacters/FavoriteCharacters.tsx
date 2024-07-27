import { useContext, useState } from 'react'

import PageContent from '../../layout/PageLayout/PageContent/PageContent'

import { FavoriteCharactersContext } from '../../context/favorite-characters'
import CharacterList from '../../components/CharacterList/CharacterList'

const FavoriteCharacters = () => {
  const [searchText, setSearchText] = useState('')

  const { favoriteCharacters } = useContext(FavoriteCharactersContext)

  const getFilteredCharacters = () => {
    return favoriteCharacters.filter((character) =>
      character.name.toLowerCase().includes(searchText.toLowerCase())
    )
  }

  return (
    <PageContent>
      <h1>FAVORITES</h1>
      <CharacterList characters={getFilteredCharacters()} onSearch={setSearchText} />
    </PageContent>
  )
}

export default FavoriteCharacters
