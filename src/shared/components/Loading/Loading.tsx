import styled from 'styled-components'

interface LoadingProps {
  loading?: boolean
}

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 32px;
`

const LoadingSpinner = styled.div`
  width: 48px;
  height: 48px;
  border: 5px solid var(--bg-color);
  border-bottom-color: var(--primary-color);
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
  0% {
      transform: rotate(0deg);
  }

  100% {
      transform: rotate(360deg);
  }
`

const Loading: React.FunctionComponent<LoadingProps> = ({ loading = true }) => {
  return loading ? (
    <LoadingContainer>
      <LoadingSpinner />
    </LoadingContainer>
  ) : null
}

export default Loading
