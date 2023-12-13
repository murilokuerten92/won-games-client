import Cart, { CartProps } from 'templates/Cart'

import itemsMock from 'components/CartList/mock'

import cardsMock from 'components/PaymentOptions/mock'
import { initializeApollo } from 'utils/apollo'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import { QueryRecommended } from 'graphql/generated/QueryRecommended'
import { gamesMapper, highlightMapper } from 'utils/mappers'

export default function CartPage(props: CartProps) {
  return <Cart {...props} />
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  })
  return {
    props: {
      items: itemsMock,
      total: '$ 430,00',
      cards: cardsMock,
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
