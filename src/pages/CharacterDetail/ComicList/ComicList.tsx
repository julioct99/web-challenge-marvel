import styled from 'styled-components'

import { Comic } from '../../../shared/types/marvel-api'
import ComicCard from './ComicCard/ComicCard'

interface ComicListProps {
  comics: Comic[]
}

const ComicCarousel = styled.div`
  display: flex;
  overflow: auto;
  gap: 24px;

  &::-webkit-scrollbar {
    background-color: #f1f1f1;
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: red;
  }

  &::-webkit-scrollbar-thumb:hover {
    cursor: pointer;
  }
`

const ComicList: React.FunctionComponent<ComicListProps> = ({ comics }) => {
  return (
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      <h2>Comics</h2>
      <ComicCarousel>
        {comics.map((comic) => (
          <ComicCard key={comic.id} comic={comic} />
        ))}
      </ComicCarousel>
    </div>
  )
}

export default ComicList
