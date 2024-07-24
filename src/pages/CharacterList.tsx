import { useContext, useEffect, useState } from 'react'

import CharacterCard from '../components/CharacterCard/CharacterCard'
import Searchbar from '../components/Searchbar/Searchbar'
import Grid from '../layout/Grid/Grid'

import { fetchCharacters } from '../shared/api/fetchers'
import { CharactersContext } from '../context/characters'

const CharacterList = () => {
  const [loading, setLoading] = useState(false)
  const { characters, setCharacters } = useContext(CharactersContext)

  useEffect(() => {
    loadCharacters()
  }, [])

  const loadCharacters = async () => {
    setLoading(true)
    try {
      const characters = await fetchCharacters()
      setCharacters(characters.data.results)
    } finally {
      setLoading(false)
    }
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
    <div>
      <h1>Character List</h1>
      <Searchbar />
      {renderContent()}
    </div>
  )
}

export default CharacterList
