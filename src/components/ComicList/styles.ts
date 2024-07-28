import styled from 'styled-components'

export const PageContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

export const ComicCarousel = styled.div`
  width: 100%;
  display: flex;
  gap: 24px;
  overflow-x: auto;

  &::-webkit-scrollbar {
    background-color: var(--bg-color);
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--primary-color);

    &:hover {
      cursor: pointer;
    }
  }
`
