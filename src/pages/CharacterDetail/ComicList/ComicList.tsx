import styled from 'styled-components'

import { Comic } from '../../../shared/types/marvel-api'
import ComicCard from './ComicCard/ComicCard'
import ScrollContainer from 'react-indiana-drag-scroll'

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

  .scroll-container {
    display: flex;
    gap: 24px;

    &:hover {
      cursor: grab;
    }

    &.scroll-dragging {
      cursor: grabbing !important;
    }

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
  }
`

const ComicList: React.FunctionComponent<ComicListProps> = ({
  comics,
  loading = false,
}) => {
  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <PageContentContainer>
      <h2>Comics</h2>
      <ComicCarousel>
        <ScrollContainer
          className='scroll-container'
          draggingClassName='scroll-dragging'
          hideScrollbars={false}
        >
          {comics.map((comic) => (
            <ComicCard key={comic.id} comic={comic} />
          ))}
        </ScrollContainer>
      </ComicCarousel>
    </PageContentContainer>
  )
}

export default ComicList
