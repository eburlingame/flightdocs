import Layout from '../components/Layout'
import Link from 'next/link'

import { GetStaticPropsContext } from 'next'

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
                        <a href={page.path}>{page.title}</a>
                    </li>
                ))}
            </ul>
        </Layout>
    )
}

export default ContentsPage

export const getStaticProps = async (context: GetStaticPropsContext) => {
    const { readdirSync, statSync, readFileSync } = require('fs')

    const parseCardFile = (filepath: string): any => {
        const contents = readFileSync(filepath).toString()
        const pattern = /^#\s(.+?)$/gm
        const [match]: any = Array.from(contents.matchAll(pattern))

        if (!match) {
            throw new Error(`No title found on page ${filepath}`)
        }

        return {
            title: match[1],
            path: filepath.replace('./pages/', '').replace('.mdx', ''),
        }
    }

    const findCards = (dir: string, parents: string[]): any => {
        const files = readdirSync(dir)

        return files
            .flatMap((filename: string) => {
                const filePath = dir + '/' + filename
                const stat = statSync(filePath)

                if (stat.isDirectory()) {
                    return findCards(filePath, [...parents, filePath])
                }

                if (filePath.endsWith('.mdx')) {
                    return {
                        ...parseCardFile(filePath),
                        parents,
                    }
                }

                return null
            })
            .filter((a: any) => a)
    }

    return {
        props: {
            pages: findCards('./pages/topics', []),
        },
    }
}
