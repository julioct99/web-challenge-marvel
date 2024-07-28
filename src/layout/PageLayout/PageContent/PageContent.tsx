import { PageContentContainer } from './styles'

interface PageContentProps {
  children: React.ReactNode
}

const PageContent: React.FunctionComponent<PageContentProps> = ({ children }) => {
  return <PageContentContainer>{children}</PageContentContainer>
}

export default PageContent
