import Home, { HomeTemplateProps } from 'templates/Home'

import { initializeApollo } from 'utils/apollo'
import { QueryHome, QueryHomeVariables } from 'graphql/generated/QueryHome'
import { QUERY_HOME } from 'graphql/queries/home'
import { bannerMapper, gamesMapper, highlightMapper } from 'utils/mappers'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

// ATENÇÃO:
// os métodos getStaticProps/getServerSideProps SÓ FUNCIONAM EM PAGES

// getStaticProps => gerar estático em build time
// getServerSideProps => gerar via ssr a cada request
// getInitialProps => gerar via ssr a cada request
export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const TODAY = new Date().toISOString().slice(0, 10)

  const {
    data: { banners, newGames, sections, upcomingGames, freeGames }
  } = await apolloClient.query<QueryHome, QueryHomeVariables>({
    query: QUERY_HOME,
    variables: {
      date: TODAY
    },
    fetchPolicy: 'no-cache'
  })

  return {
    revalidate: 10,
    props: {
      banners: bannerMapper(banners.data),
      newGamesTitle: sections.data.attributes.newGames.title,
      newGames: gamesMapper(newGames.data),
      mostPopularGamesTitle: sections?.data?.attributes?.popularGames?.title,
      mostPopularHighlight: highlightMapper(
        sections.data.attributes.popularGames.highlight
      ),
      mostPopularGames: gamesMapper(
        sections?.data.attributes.popularGames.games?.data
      ),
      upcomingGamesTitle: sections?.data?.attributes?.upcomingGames?.title,
      upcommingGames: gamesMapper(upcomingGames.data),
      upcommingHighligth: highlightMapper(
        sections.data.attributes.upcomingGames.highlight
      ),
      freeGamesTitle: sections?.data?.attributes?.freeGames?.title,
      freeGames: gamesMapper(freeGames.data),
      freeHighligth: highlightMapper(
        sections.data.attributes.freeGames.highlight
      )
    }
  }
}
