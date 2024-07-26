import styled from 'styled-components'

const GridContainer = styled.div`
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
