import styled from 'styled-components'
import { Comic } from '../../../../shared/types/marvel-api'

interface ComicProps {
  comic: Comic
}

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
`

const ComicCard: React.FunctionComponent<ComicProps> = ({ comic }) => {
  const getReleaseYear = () => {
    const comicDates = comic.dates || []
    const onSaleDate = comicDates.find((d) => d.type === 'onsaleDate')
    const dateObj = onSaleDate ? new Date(onSaleDate.date) : null
    return dateObj?.getFullYear() || 'Unknown'
  }

  return (
    <div>
      <img
        width={200}
        src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
        alt={comic.title}
      />
      <CardBody>
        <strong>{comic.title}</strong>
        <small>{getReleaseYear()}</small>
      </CardBody>
    </div>
  )
}

export default ComicCard
