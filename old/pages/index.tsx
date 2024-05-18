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
            <Link href="/outlines/highperformance">
              High-Performance Outline
            </Link>
          </li>
        </ul>
        <h1>Scenarios</h1>
        <ul>
          <li>
            <Link href="/scenarios/c172m-deep-dive">Cessna 172M Deep Dive</Link>
          </li>
          <li>
            <Link href="/scenarios/t182-deep-dive">Cessna T182 Deep Dive</Link>
          </li>
        </ul>
      </div>
    </Layout>
  )
}

export default HomePage
