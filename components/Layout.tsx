import { ReactNode } from 'react'
import styled from 'styled-components'

export type LayoutProps = {
  children: ReactNode
}

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 850px;
  padding: 0.5em;
`

const Layout = ({ children }: LayoutProps) => {
  return <Container>{children}</Container>
}

export default Layout
