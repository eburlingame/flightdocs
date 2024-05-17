import Link from 'next/link'
import pages from '../pages'
import Layout from './Layout'
import { CardMeta } from '../utils/parseCards'

export type IndexPageProps = {
  title: string
  pages: CardMeta[]
}

const IndexPage = ({ title, pages }: IndexPageProps) => {
  return (
    <Layout>
      <h1>{title}</h1>

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

export default IndexPage
