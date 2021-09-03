import Layout from '../components/Layout'
import Link from 'next/link'

const HomePage = () => {
    return (
        <Layout>
            <div>
                <h1>Outlines</h1>
                <Link href="/outlines/commercial">Commercial Outline</Link>
            </div>
        </Layout>
    )
}

export default HomePage
