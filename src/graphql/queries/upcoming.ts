import { gql } from '@apollo/client'

import { GameFragment } from 'graphql/fragments/game'
import { HighlightFragment } from 'graphql/fragments/highlight'

export const QUERY_UPCOMING = gql`
  query QueryUpcoming($date: Date!) {
    upcomingGames: games(
      filters: { release_date: { gt: $date } }
      pagination: { limit: 8 }
      sort: "release_date:desc"
    ) {
      data {
        attributes {
          ...GameFragment
        }
      }
    }

    showcase: home {
      data {
        attributes {
          upcomingGames {
            title
            highlight {
              ...HighlightFragment
            }
          }
        }
      }
    }
  }

  ${GameFragment}
  ${HighlightFragment}
`
