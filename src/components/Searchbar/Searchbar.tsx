import { useRef } from 'react'

interface SearchbarProps {
  onSearch: (searchText: string) => void
}

const Searchbar: React.FunctionComponent<SearchbarProps> = ({ onSearch = () => {} }) => {
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
    <input
      type='text'
      ref={inputRef}
      onKeyDown={handleKeyDown}
      style={{ width: '100%' }}
    />
  )
}

export default Searchbar
