import Link from 'next/link'
import Layout from '../components/Layout'

import { GetStaticPropsContext } from 'next'
import { findCards } from '../utils/parseCards'

type ContentsPageProps = {
  pages: any[]
}

const ContentsPage = ({ pages }: ContentsPageProps) => {
  return (
    <Layout>
      <h1>All Pages</h1>
      <ul>
        {pages.map((page) => (
          <li key={page.path}>
            <Link href={page.path}>{page.title}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default ContentsPage

export const getStaticProps = async (context: GetStaticPropsContext) => {
  return {
    props: {
      pages: findCards('./pages/topics', []),
    },
  }
}
