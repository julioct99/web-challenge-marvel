import { useContext, useEffect, useState } from 'react'

import CharacterCard from '../../components/CharacterCard/CharacterCard'
import Searchbar from '../../components/Searchbar/Searchbar'
import Grid from '../../layout/Grid/Grid'

import { CharactersContext } from '../../context/characters'
import PageContent from '../../layout/PageLayout/PageContent/PageContent'

import { fetchCharacters } from '../../shared/api/fetchers'
import { CharacterQueryParams } from '../../shared/types/marvel-api'

const CharacterList = () => {
  const [loading, setLoading] = useState(false)
  const { characters, setCharacters } = useContext(CharactersContext)

  useEffect(() => {
    loadCharacters()
  }, [])

  const loadCharacters = async (params: CharacterQueryParams = {}) => {
    setLoading(true)
    try {
      const characters = await fetchCharacters(params)
      setCharacters(characters.data.results)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = (searchText: string) => {
    loadCharacters({ nameStartsWith: searchText })
  }

  const renderContent = () => {
    if (loading) {
      return <p>Loading...</p>
    }

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
      <Searchbar onSearch={handleSearch} placeholder='Search a character...' />
      {renderContent()}
    </PageContent>
  )
}

export default CharacterList
