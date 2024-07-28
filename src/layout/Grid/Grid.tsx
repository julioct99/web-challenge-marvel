import { GridContainer, GridItem } from './styles'

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
