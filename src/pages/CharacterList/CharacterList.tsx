import { useContext } from 'react'

import CharacterCard from '../../components/CharacterCard/CharacterCard'
import Grid from '../../layout/Grid/Grid'
import PageContent from '../../layout/PageLayout/PageContent/PageContent'
import CharacterSearch from './CharacterSearch/CharacterSearch'

import { CharactersContext } from '../../context/characters'

const CharacterList = () => {
  const { characters, loadCharacters, loading } = useContext(CharactersContext)

  const handleSearch = (searchText: string) => {
    loadCharacters({ nameStartsWith: searchText })
  }

  const renderContent = () => {
    if (loading) return <p>Loading...</p>

    return (
      <Grid>
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </Grid>
    )
  }

  return (
    <PageContent>
      <CharacterSearch onSearch={handleSearch} />
      {renderContent()}
    </PageContent>
  )
}

export default CharacterList
