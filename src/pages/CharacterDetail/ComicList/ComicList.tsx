import { Comic } from '../../../shared/types/marvel-api'

interface ComicListProps {
  comics: Comic[]
}

const ComicList: React.FunctionComponent<ComicListProps> = ({ comics }) => {
  return (
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      <h2>Comics</h2>
      <ul>
        {comics.map((comic) => (
          <li key={comic.id}>{comic.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default ComicList
