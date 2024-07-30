import Navbar from './Navbar'

interface PageLayoutProps {
  children: React.ReactNode
}

const PageLayout: React.FunctionComponent<PageLayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default PageLayout
