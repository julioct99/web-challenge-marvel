import { CardBody } from './styles'
import { Comic } from '../../../shared/types/marvel-api'

interface ComicProps {
  comic: Comic
}

const ComicCard: React.FunctionComponent<ComicProps> = ({ comic }) => {
  const getReleaseYear = () => {
    const comicDates = comic.dates || []
    const onSaleDate = comicDates.find((d) => d.type === 'onsaleDate')
    const dateObj = onSaleDate ? new Date(onSaleDate.date) : null
    return dateObj?.getFullYear() || 'Unknown'
  }

  return (
    <div data-cy='comic-card'>
      <img
        width={200}
        src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
        alt={comic.title}
      />
      <CardBody>
        <strong data-cy='comic-title'>{comic.title}</strong>
        <small data-cy='comic-year'>{getReleaseYear()}</small>
      </CardBody>
    </div>
  )
}

export default ComicCard
