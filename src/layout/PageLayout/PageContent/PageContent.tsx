interface PageContentProps {
  children: React.ReactNode
}

const PageContent: React.FunctionComponent<PageContentProps> = ({ children }) => {
  return <div style={{ padding: 64 }}>{children}</div>
}

export default PageContent
