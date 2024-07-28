import Loading from '../../shared/components/Loading'
import ComicCard from './ComicCard'

import { Comic } from '../../shared/types/marvel-api'
import { ComicCarousel, PageContentContainer } from './styles'

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
    <PageContentContainer>
      <h2>Comics</h2>
      <ComicCarousel>
        {comics.map((comic) => (
          <ComicCard key={comic.id} comic={comic} />
        ))}
      </ComicCarousel>
    </PageContentContainer>
  )
}

export default ComicList
