import { ReactNode } from 'react'
import styled from 'styled-components'
import Layout from './Layout'

export type OutlineWrapperProps = {
  children: ReactNode
}

const OutlineWrapper = ({ children }: OutlineWrapperProps) => {
  return (
    <Layout>
      <div>{children}</div>
    </Layout>
  )
}

export default OutlineWrapper
