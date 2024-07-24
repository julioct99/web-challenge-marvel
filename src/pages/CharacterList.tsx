import { useEffect, useState } from 'react'

import CharacterCard from '../components/CharacterCard/CharacterCard'
import Searchbar from '../components/Searchbar/Searchbar'
import Grid from '../layout/Grid/Grid'

import { fetchCharacters } from '../shared/api/fetchers'

const CharacterList = () => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    loadCharacters()
  }, [])

  const loadCharacters = async () => {
    setLoading(true)
    try {
      const characters = await fetchCharacters()
      console.log({ characters })
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
        <CharacterCard character={{ name: '1' }} />
        <CharacterCard character={{ name: '2' }} />
        <CharacterCard character={{ name: '3' }} />
        <CharacterCard character={{ name: '4' }} />
        <CharacterCard character={{ name: '5' }} />
        <CharacterCard character={{ name: '6' }} />
        <CharacterCard character={{ name: '7' }} />
        <CharacterCard character={{ name: '8' }} />
        <CharacterCard character={{ name: '9' }} />
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
