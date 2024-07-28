import CharacterSearch from './CharacterSearch'
import Grid from '../../layout/Grid'
import Loading from '../../shared/components/Loading'
import CharacterCard from '../CharacterCard'

import { Character } from '../../shared/types/marvel-api'

interface CharacterListProps {
  characters: Character[]
  onSearch: (searchText: string) => void
  loading?: boolean
}

const CharacterList: React.FunctionComponent<CharacterListProps> = ({
  characters,
  onSearch,
  loading = false,
}) => {
  const renderContent = () => {
    if (loading) return <Loading />

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
