import { useRef } from 'react'
import styled from 'styled-components'
import ResultCountDisplay from './ResultCountDisplay/ResultCountDisplay'

interface SearchbarProps {
  onSearch: (searchText: string) => void
  placeholder?: string
}

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
  width: 100%;
  padding-bottom: 5px;
`

const SearchIcon = styled('span')`
  margin-right: 10px;
  font-size: 18px;
`

const SearchInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
  font-size: 16px;

  ::placeholder {
    color: #999;
  }
`

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 20px;
`

const Searchbar: React.FunctionComponent<SearchbarProps> = ({
  onSearch = () => {},
  placeholder = undefined,
}) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSearch = () => {
    if (inputRef.current) {
      onSearch(inputRef.current.value)
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <SectionContainer>
      <SearchContainer>
        <SearchIcon>(icon)</SearchIcon>
        <SearchInput
          type='text'
          ref={inputRef}
          onKeyDown={handleKeyDown}
          placeholder={(placeholder || 'Search...').toUpperCase()}
        />
      </SearchContainer>
      <ResultCountDisplay resultCount={50} />
    </SectionContainer>
  )
}

export default Searchbar
