import { GetStaticPropsContext } from 'next'
import IndexPage from '../../../components/IndexPage'
import { CardMeta, findCards } from '../../../utils/parseCards'

const indexPageConfig = {
  title: 'Instruments',
  rootDir: './pages/topics/instruments',
}

type ContentsPageProps = {
  pages: CardMeta[]
}

const ContentsPage = ({ pages }: ContentsPageProps) => {
  return <IndexPage title={indexPageConfig.title} pages={pages} />
}

export default ContentsPage

export const getStaticProps = async (context: GetStaticPropsContext) => {
  return {
    props: {
      pages: findCards(indexPageConfig.rootDir, []),
    },
  }
}
