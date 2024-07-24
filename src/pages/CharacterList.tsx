import CharacterCard from '../components/CharacterCard/CharacterCard'
import Searchbar from '../components/Searchbar/Searchbar'
import Grid from '../layout/Grid/Grid'

const CharacterList = () => {
  return (
    <div>
      <h1>Character List</h1>
      <Searchbar />
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
    </div>
  )
}

export default CharacterList
