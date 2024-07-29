import { Character } from '../../../shared/types/marvel-api'
import ResultCountDisplay from '../../../shared/components/ResultCountDisplay'
import Searchbar from '../../../shared/components/Searchbar'
import { SectionContainer } from './styles'

interface CharacterSearchProps {
  onSearch: (searchText: string) => void
  characters: Character[]
}

const CharacterSearch: React.FunctionComponent<CharacterSearchProps> = ({
  onSearch,
  characters = [],
}) => {
  return (
    <SectionContainer>
      <Searchbar onSearch={onSearch} placeholder='Search a character...' />
      <ResultCountDisplay resultCount={characters.length} />
    </SectionContainer>
  )
}

export default CharacterSearch
