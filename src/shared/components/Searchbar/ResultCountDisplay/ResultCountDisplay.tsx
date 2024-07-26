import styled from 'styled-components'

interface ResultCountDisplayProps {
  resultCount: number
}

const ResultContainer = styled.small`
  font-size: 12px;
`

const ResultCountDisplay: React.FunctionComponent<ResultCountDisplayProps> = ({
  resultCount,
}) => {
  return <ResultContainer>{resultCount} RESULTS</ResultContainer>
}

export default ResultCountDisplay
