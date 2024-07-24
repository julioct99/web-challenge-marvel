import Navbar from './Navbar/Navbar'
import PageContent from './PageContent/PageContent'

interface PageLayoutProps {
  children: React.ReactNode
}

const PageLayout: React.FunctionComponent<PageLayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <PageContent>{children}</PageContent>
    </div>
  )
}

export default PageLayout
