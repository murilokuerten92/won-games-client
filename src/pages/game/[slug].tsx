import Game, { GameTemplateProps } from 'templates/Game'

import { useRouter } from 'next/router'
import { initializeApollo } from 'utils/apollo'
import { QUERY_GAMES, QUERY_GAMES_BY_SLUG } from 'graphql/queries/games'
import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames'
import {
  QueryGamesBySlug,
  QueryGamesBySlugVariables
} from 'graphql/generated/QueryGamesBySlug'
import { GetStaticProps } from 'next'
import { QueryRecommended } from 'graphql/generated/QueryRecommended'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import { gamesMapper, highlightMapper } from 'utils/mappers'
import {
  QueryUpcoming,
  QueryUpcomingVariables
} from 'graphql/generated/QueryUpcoming'
import { QUERY_UPCOMING } from 'graphql/queries/upcoming'

const apolloClient = initializeApollo()

export default function Index(props: GameTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return null
  return <Game {...props} />
}

// gerar em build time (/game/bla, /bame/foo ...)
export async function getStaticPaths() {
  const { data } = await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: {
      limit: 9,
      start: 0,
      price_lte: 0,
      name: 'windows',
      sort: 'price:asc'
    }
  })

  const paths = data.games.data.map(({ attributes }) => {
    const slug = attributes.slug

    return {
      params: { slug: slug }
    }
  })

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await apolloClient.query<
    QueryGamesBySlug,
    QueryGamesBySlugVariables
  >({
    query: QUERY_GAMES_BY_SLUG,
    variables: {
      slug: `${params?.slug}`
    },
    fetchPolicy: 'no-cache'
  })

  if (!data?.games?.data?.length) {
    return { notFound: true }
  }

  const game = data.games.data[0]

  const { data: recommended } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  })

  const TODAY = new Date().toISOString().slice(0, 10)

  const { data: upcoming } = await apolloClient.query<
    QueryUpcoming,
    QueryUpcomingVariables
  >({
    query: QUERY_UPCOMING,
    variables: {
      date: TODAY
    }
  })

  return {
    revalidate: 10,
    props: {
      cover: `http://localhost:1337/${game.attributes?.cover?.data?.attributes?.url}`,
      gameInfo: {
        id: params?.slug,
        title: game.attributes?.name,
        price: game.attributes?.price,
        description: game.attributes?.short_description
      },
      gallery: game.attributes?.gallery?.data.map((image) => ({
        src: `http://localhost:1337${image.attributes?.src}`,
        label: image.attributes?.label
      })),
      description: game.attributes?.description,
      details: {
        developer: game.attributes?.developers?.data[0].attributes?.name,
        releaseDate: game.attributes?.release_date,
        platforms: game.attributes?.platforms?.data.map(
          (platform) => platform.attributes?.name
        ),
        publisher: game.attributes?.name,
        rating: game.attributes?.rating,
        genres: game.attributes?.categories?.data.map(
          (category) => category.attributes?.name
        )
      },
      upcomingTitle: upcoming.showcase.data.attributes.upcomingGames.title,
      upcomingGames: gamesMapper(upcoming?.upcomingGames?.data),
      upcomingHighlight: highlightMapper(
        upcoming.showcase.data.attributes.upcomingGames.highlight
      ),
      recommendedTitle: recommended.recommended.data.attributes.section.title,
      recommendedGames: gamesMapper(
        recommended.recommended.data.attributes.section.games?.data
      )
    }
  }
}
