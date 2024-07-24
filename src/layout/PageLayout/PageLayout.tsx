import Navbar from './Navbar/Navbar'

interface PageLayoutProps {
  children: React.ReactNode
}

const PageLayout: React.FunctionComponent<PageLayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}

export default PageLayout
