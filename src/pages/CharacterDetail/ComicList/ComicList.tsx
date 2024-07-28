import styled from 'styled-components'

import { Comic } from '../../../shared/types/marvel-api'
import ComicCard from './ComicCard/ComicCard'
import Loading from '../../../shared/components/Loading/Loading'

interface ComicListProps {
  comics: Comic[]
  loading: boolean
}

const PageContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const ComicCarousel = styled.div`
  width: 100%;
  display: flex;
  gap: 24px;
  overflow-x: auto;

  &::-webkit-scrollbar {
    background-color: #f1f1f1;
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: red;

    &:hover {
      cursor: pointer;
    }
  }
`

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
