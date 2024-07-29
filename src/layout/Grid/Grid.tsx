import { GridContainer, GridItem } from './styles'

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode[]
}

const Grid: React.FunctionComponent<GridProps> = ({ children, ...props }) => {
  return (
    <GridContainer {...props}>
      {children.map((item, index) => (
        <GridItem key={index}>{item}</GridItem>
      ))}
    </GridContainer>
  )
}

export default Grid
