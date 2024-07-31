import { LoadingContainer, LoadingSpinner } from './styles'

interface LoadingProps {
  loading?: boolean
}

const Loading: React.FunctionComponent<LoadingProps> = ({ loading = true }) => {
  return loading ? (
    <LoadingContainer>
      <LoadingSpinner />
      <p>Please wait. Marvel's API response times are very slow.</p>
    </LoadingContainer>
  ) : null
}

export default Loading
