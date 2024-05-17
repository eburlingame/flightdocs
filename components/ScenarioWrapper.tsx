import { ReactNode } from 'react'
import styled from 'styled-components'
import Layout from './Layout'

export type ScenarioWrapperProps = {
  children: ReactNode
}

const ScenarioWrapper = ({ children }: ScenarioWrapperProps) => {
  return (
    <Layout>
      <div>{children}</div>
    </Layout>
  )
}

export default ScenarioWrapper
