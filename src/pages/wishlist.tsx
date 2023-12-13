import Wishlist, { WishlistTemplateProps } from 'templates/Wishlist'

import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import { initializeApollo } from 'utils/apollo'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import { gamesMapper, highlightMapper } from 'utils/mappers'
import { QueryRecommended } from 'graphql/generated/QueryRecommended'

export default function WishlistPage(props: WishlistTemplateProps) {
  return <Wishlist {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  })
  return {
    props: {
      games: gamesMock,
      recommendedTitle: data.recommended.data.attributes.section.title,
      recommendedGames: gamesMapper(
        data.recommended.data.attributes.section.games?.data
      ),
      recommendedHighlight: highlightMapper(
        data.recommended.data.attributes?.section.highlight
      )
    }
  }
}
