import CharacterList from '../../components/CharacterList/CharacterList'
import PageContent from '../../layout/PageLayout/PageContent/PageContent'

import { useCharacters } from '../../shared/hooks/use-characters'

const Characters = () => {
  const { characters, loadCharacters, loading } = useCharacters()

  const handleSearch = (searchText: string) => {
    loadCharacters({ nameStartsWith: searchText })
  }

  return (
    <PageContent>
      <CharacterList characters={characters} loading={loading} onSearch={handleSearch} />
    </PageContent>
  )
}

export default Characters
