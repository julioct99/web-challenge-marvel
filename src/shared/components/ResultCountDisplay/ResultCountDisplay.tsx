import { ResultContainer } from './styles'

interface ResultCountDisplayProps {
  resultCount: number
}

const ResultCountDisplay: React.FunctionComponent<ResultCountDisplayProps> = ({
  resultCount,
}) => {
  return <ResultContainer>{resultCount} RESULTS</ResultContainer>
}

export default ResultCountDisplay
