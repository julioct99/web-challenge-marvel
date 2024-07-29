import { ComicCarousel, PageContentContainer } from './styles'

import { Comic } from '../../shared/types/marvel-api'
import ComicCard from './ComicCard'
import Loading from '../../shared/components/Loading'

interface ComicListProps {
  comics: Comic[]
  loading: boolean
}

const ComicList: React.FunctionComponent<ComicListProps> = ({
  comics,
  loading = false,
}) => {
  if (loading) {
    return <Loading />
  }

  return (
    <PageContentContainer data-cy='comic-list'>
      <h2>Comics</h2>
      <ComicCarousel data-cy='comic-carousel'>
        {comics.map((comic) => (
          <ComicCard key={comic.id} comic={comic} />
        ))}
      </ComicCarousel>
    </PageContentContainer>
  )
}

export default ComicList
