interface PageContentProps {
  children: React.ReactNode
}

const PageContent: React.FunctionComponent<PageContentProps> = ({ children }) => {
  return <div style={{ padding: '16px 64px' }}>{children}</div>
}

export default PageContent
