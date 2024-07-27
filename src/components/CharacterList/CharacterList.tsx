import Grid from '../../layout/Grid/Grid'
import CharacterCard from '../CharacterCard/CharacterCard'
import CharacterSearch from './CharacterSearch/CharacterSearch'

import { Character } from '../../shared/types/marvel-api'

interface CharacterListProps {
  characters: Character[]
  loading: boolean
  onSearch: (searchText: string) => void
}

const CharacterList: React.FunctionComponent<CharacterListProps> = ({
  characters,
  loading = false,
  onSearch,
}) => {
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
    <>
      <CharacterSearch characters={characters} onSearch={onSearch} />
      {renderContent()}
    </>
  )
}

export default CharacterList
