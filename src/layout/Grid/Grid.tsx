import styled from 'styled-components'

const GridContainer = styled.div`
  display: grid;
  gap: 20px;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(7, 1fr); /* 7 columns on PC */
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: repeat(4, 1fr); /* 4 columns on tablet */
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr); /* 2 columns on mobile */
  }
`

const GridItem = styled.div`
  box-sizing: border-box;
`

interface GridProps {
  children: React.ReactNode[]
}

const Grid: React.FunctionComponent<GridProps> = ({ children }) => {
  return (
    <GridContainer>
      {children.map((item, index) => (
        <GridItem key={index}>{item}</GridItem>
      ))}
    </GridContainer>
  )
}

export default Grid
