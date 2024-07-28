import { useRef } from 'react'

import { SearchContainer, SearchIcon, SearchInput } from './styles'

import searchIcon from '/search_icon.png'

interface SearchbarProps {
  onSearch: (searchText: string) => void
  placeholder?: string
}

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
    <SearchContainer>
      <SearchIcon>
        <img src={searchIcon} alt='Search icon' />
      </SearchIcon>
      <SearchInput
        type='text'
        ref={inputRef}
        onKeyDown={handleKeyDown}
        placeholder={(placeholder || 'Search...').toUpperCase()}
      />
    </SearchContainer>
  )
}

export default Searchbar
