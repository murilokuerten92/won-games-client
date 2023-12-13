import { gql } from '@apollo/client'
import { BannerFragment } from 'graphql/fragments/banner'
import { GameFragment } from 'graphql/fragments/game'
import { HighlightFragment } from 'graphql/fragments/highlight'

export const QUERY_HOME = gql`
  query QueryHome($date: Date!) {
    banners {
      data {
        attributes {
          ...BannerFragment
        }
      }
    }
    newGames: games(
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
    freeGames: games(
      filters: { price: { lte: 8 } }
      pagination: { limit: 8 }
      sort: "release_date:desc"
    ) {
      data {
        attributes {
          ...GameFragment
        }
      }
    }
    sections: home {
      data {
        attributes {
          newGames {
            title
            highlight {
              ...HighlightFragment
            }
          }
          popularGames {
            title
            highlight {
              ...HighlightFragment
            }
            games {
              data {
                attributes {
                  ...GameFragment
                }
              }
            }
          }
          upcomingGames {
            title
            highlight {
              ...HighlightFragment
            }
          }
          freeGames {
            title
            highlight {
              ...HighlightFragment
            }
          }
        }
      }
    }
  }
  ${BannerFragment}
  ${GameFragment}
  ${HighlightFragment}
`
