import { LoadingContainer, LoadingSpinner } from './styles'

interface LoadingProps {
  loading?: boolean
}

const Loading: React.FunctionComponent<LoadingProps> = ({ loading = true }) => {
  return loading ? (
    <LoadingContainer>
      <LoadingSpinner />
    </LoadingContainer>
  ) : null
}

export default Loading
