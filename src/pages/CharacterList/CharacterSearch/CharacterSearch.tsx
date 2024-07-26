import { useContext } from 'react'

import styled from 'styled-components'

import Searchbar from '../../../shared/components/Searchbar/Searchbar'
import ResultCountDisplay from '../../../shared/components/Searchbar/ResultCountDisplay/ResultCountDisplay'

import { CharactersContext } from '../../../context/characters'

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 20px;
`

interface CharacterSearchProps {
  onSearch: (searchText: string) => void
}

const CharacterSearch: React.FunctionComponent<CharacterSearchProps> = ({ onSearch }) => {
  const { characters } = useContext(CharactersContext)

  return (
    <SectionContainer>
      <Searchbar onSearch={onSearch} placeholder='Search a character...' />
      <ResultCountDisplay resultCount={characters.length} />
    </SectionContainer>
  )
}

export default CharacterSearch
