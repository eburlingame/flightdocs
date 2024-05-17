import Layout from '../components/Layout'
import Link from 'next/link'

const HomePage = () => {
  return (
    <Layout>
      <Link href="/contents">All Content</Link>
      <div>
        <h1>Outlines</h1>
        <ul>
          <li>
            <Link href="/outlines/commercial">Commercial Outline</Link>
          </li>
          <li>
            <Link href="/outlines/flightreview">Flight Review Outline</Link>
          </li>
          <li>
            <Link href="/outlines/highperformane">
              High-Performance Outline
            </Link>
          </li>
        </ul>
      </div>
    </Layout>
  )
}

export default HomePage
