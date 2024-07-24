interface PageContentProps {
  children: React.ReactNode
}

const PageContent: React.FunctionComponent<PageContentProps> = ({ children }) => {
  return <div>{children}</div>
}

export default PageContent
