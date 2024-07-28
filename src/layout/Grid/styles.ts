import styled from 'styled-components'

export const GridContainer = styled.div`
  display: grid;
  gap: 20px;

  @media (min-width: 1200px) {
    grid-template-columns: repeat(7, 1fr);
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 479px) {
    grid-template-columns: 1fr;
  }
`

export const GridItem = styled.div`
  box-sizing: border-box;
`
